export const generateBlurPlaceholder = (width = 10, height = 10) => {
  const canvas =
    typeof window !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas)
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23e5e7eb" width="100" height="100"/%3E%3C/svg%3E';

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL();
};

export const placeholderImage =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="18" fill="%239ca3af" text-anchor="middle" dominant-baseline="middle"%3ELoading image...%3C/text%3E%3C/svg%3E';

import PropTypes from 'prop-types';

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  ...props
}) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    className={className}
    width={width}
    height={height}
    {...props}
  />
);

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
