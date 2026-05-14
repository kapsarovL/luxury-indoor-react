import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'framer-motion';

const NumberTicker = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (typeof value !== 'string' || !value) {
    console.error('NumberTicker: value prop must be a non-empty string');
    return <span className="inline-block">{value || '0'}</span>;
  }

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);

  if (isNaN(numericValue)) {
    return <span className="inline-block">{value}</span>;
  }

  const duration = 2000;

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * numericValue);

      if (value.includes('million')) {
        setDisplayValue(`${current} million`);
      } else if (value.includes('trillion')) {
        setDisplayValue(`$${current} trillion`);
      } else if (value.includes('%')) {
        setDisplayValue(`${current}%`);
      } else if (value.includes('+')) {
        setDisplayValue(`${current}+`);
      } else if (value.includes(',')) {
        setDisplayValue(current.toLocaleString());
      } else {
        setDisplayValue(current + suffix);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, suffix, numericValue]);

  return (
    <span ref={ref} className="inline-block">
      {displayValue}
    </span>
  );
};

NumberTicker.propTypes = {
  value: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

export default NumberTicker;
