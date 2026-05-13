import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from '../SignupForm';
import * as useAuthModule from '../../../hooks/useAuth';
import * as useToastModule from '../../../hooks/useToast';

jest.mock('../../../hooks/useAuth');
jest.mock('../../../hooks/useToast');

const renderSignupForm = () => {
  return render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>
  );
};

describe('SignupForm', () => {
  const mockSignup = jest.fn();
  const mockShowError = jest.fn();
  const mockSuccess = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useAuthModule.useAuth.mockReturnValue({
      signup: mockSignup,
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

  it('should render signup form with all required fields', () => {
    renderSignupForm();

    expect(screen.getByText('Create your account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText('Password')).toHaveLength(1);
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it('should show login link', () => {
    renderSignupForm();

    const loginLink = screen.getByRole('link', { name: /sign in/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('should display validation error for invalid email', async () => {
    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });
  });

  it('should display validation error for missing email', async () => {
    renderSignupForm();

    const usernameInput = screen.getByPlaceholderText('Username');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/email is required|invalid email/i)
      ).toBeInTheDocument();
    });
  });

  it('should display validation error for missing username', async () => {
    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/username is required|at least/i)
      ).toBeInTheDocument();
    });
  });

  it('should display validation error for short password', async () => {
    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/at least \d+ characters|password is required/i)
      ).toBeInTheDocument();
    });
  });

  it('should display validation error for mismatched passwords', async () => {
    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password456' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/passwords do not match|confirm|mismatch/i)
      ).toBeInTheDocument();
    });
  });

  it('should call signup function with correct data', async () => {
    mockSignup.mockResolvedValue({
      id: 1,
      email: 'test@example.com',
      username: 'testuser',
    });

    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSignup).toHaveBeenCalledWith(
        'test@example.com',
        'testuser',
        'password123'
      );
    });
  });

  it('should show loading state while submitting', async () => {
    mockSignup.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({}), 100))
    );

    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });
    fireEvent.click(submitButton);

    expect(
      screen.getByRole('button', { name: /creating account/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /creating account/i })
    ).toBeDisabled();
  });

  it('should show success message on successful signup', async () => {
    mockSignup.mockResolvedValue({
      id: 1,
      email: 'test@example.com',
      username: 'testuser',
    });

    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSuccess).toHaveBeenCalledWith(
        'Account created successfully! Redirecting...'
      );
    });
  });

  it('should show error message on signup failure', async () => {
    mockSignup.mockRejectedValue(new Error('Email already exists'));

    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockShowError).toHaveBeenCalledWith('Email already exists');
    });
  });

  it('should disable submit button while loading', async () => {
    mockSignup.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({}), 100))
    );

    renderSignupForm();

    const emailInput = screen.getByPlaceholderText('Email address');
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });
    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();

    await waitFor(
      () => {
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 200 }
    );
  });
});
