import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    // Mock login check
    console.log('Login attempt:', { email, password });

    // Navigate to chatbot page after login
    navigate('/kaindamdamin/chatbot');
  };

  const goToCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Your password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {/* Create Account Button */}
      <p>Don't have an account?</p>
      <button onClick={goToCreateAccount}>Create Account</button>
    </div>
  );
}
