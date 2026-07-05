import { useContext } from 'react';
import { renderHook, act } from '@testing-library/react';
import {
  SubscriptionProvider,
  SubscriptionContext,
} from '../SubscriptionContext';

const useSubscription = () => useContext(SubscriptionContext);

describe('SubscriptionContext', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  const wrapper = ({ children }) => (
    <SubscriptionProvider>{children}</SubscriptionProvider>
  );

  const renderWithContext = () =>
    renderHook(() => useSubscription(), { wrapper });

  it('should provide context with initial empty state', () => {
    const { result } = renderWithContext();
    const { loading, error, subscribedEmails, isSubscribed } = result.current;

    expect(loading).toBe(false);
    expect(error).toBe(null);
    expect(subscribedEmails).toBeInstanceOf(Set);
    expect(subscribedEmails.size).toBe(0);
    expect(isSubscribed('test@example.com')).toBe(false);
  });

  it('should subscribe an email successfully', async () => {
    const { result } = renderWithContext();

    await act(async () => {
      const res = await result.current.subscribe({
        email: 'test@example.com',
      });
      expect(res).toEqual({ email: 'test@example.com' });
    });

    expect(result.current.isSubscribed('test@example.com')).toBe(true);
    expect(result.current.error).toBe(null);
  });

  it('should reject duplicate subscriptions', async () => {
    const { result } = renderWithContext();

    await act(async () => {
      await result.current.subscribe({ email: 'test@example.com' });
    });

    await act(async () => {
      await expect(
        result.current.subscribe({ email: 'test@example.com' })
      ).rejects.toThrow('Email already subscribed');
    });

    expect(result.current.error).toBe('Email already subscribed');
  });

  it('should unsubscribe an email', async () => {
    const { result } = renderWithContext();

    await act(async () => {
      await result.current.subscribe({ email: 'test@example.com' });
    });

    await act(async () => {
      await result.current.unsubscribe('test@example.com');
    });

    expect(result.current.isSubscribed('test@example.com')).toBe(false);
  });

  it('should persist subscriptions to localStorage', async () => {
    const { result } = renderWithContext();

    await act(async () => {
      await result.current.subscribe({ email: 'test@example.com' });
    });

    const stored = JSON.parse(
      localStorage.getItem('luxury_subscriptions') || '[]'
    );
    expect(stored).toEqual(['test@example.com']);

    await act(async () => {
      await result.current.unsubscribe('test@example.com');
    });

    const storedAfter = JSON.parse(
      localStorage.getItem('luxury_subscriptions') || '[]'
    );
    expect(storedAfter).toEqual([]);
  });
});
