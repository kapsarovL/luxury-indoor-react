import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../LoginForm';
import * as useAuthModule from '../../../hooks/useAuth';
import * as useToastModule from '../../../hooks/useToast';

jest.mock('../../../hooks/useAuth');
jest.mock('../../../hooks/useToast');

const renderLoginForm = () => {
  return render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
};

describe('LoginForm', () => {
  const mockLogin = jest.fn();
  const mockShowError = jest.fn();
  const mockSuccess = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useAuthModule.useAuth.mockReturnValue({
      login: mockLogin,
      logout: jest.fn(),
      user: null,
      isAuthenticated: false,
    });

    useToastModule.useToast.mockReturnValue({
      error: mockShowError,
      success: mockSuccess,
      info: jest.fn(),
    });

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));
  });

  it('should render login form with email and password fields', () => {
    renderLoginForm();

    expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it('should show sign up link', () => {
    renderLoginForm();

    const signupLink = screen.getByRole('link', { name: /sign up/i });
    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute('href', '/signup');
  });

  it('should display validation error for missing email', async () => {
    renderLoginForm();

    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/email is required|invalid email/i)
      ).toBeInTheDocument();
    });
  });

  it('should display validation error for missing password', async () => {
    renderLoginForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it('should display validation error for short password', async () => {
    renderLoginForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/at least \d+ characters|password is required/i)
      ).toBeInTheDocument();
    });
  });

  it('should call login function with correct credentials', async () => {
    mockLogin.mockResolvedValue({ id: 1, email: 'test@example.com' });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('should show loading state while submitting', async () => {
    mockLogin.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({}), 100))
    );

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /signing in/i })
      ).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: /signing in/i })).toBeDisabled();
  });

  it('should show success message on successful login', async () => {
    mockLogin.mockResolvedValue({ id: 1, email: 'test@example.com' });

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSuccess).toHaveBeenCalledWith(
        'Login successful! Redirecting...'
      );
    });
  });

  it('should show error message on login failure', async () => {
    mockLogin.mockRejectedValue(new Error('Invalid credentials'));

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockShowError).toHaveBeenCalledWith('Invalid credentials');
    });
  });

  it('should disable submit button while loading', async () => {
    mockLogin.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({}), 100))
    );

    renderLoginForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });

    await waitFor(
      () => {
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 200 }
    );
  });
});
