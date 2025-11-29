import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const SECRET_PASSWORD = import.meta.env.VITE_APP_SECRET_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/todos');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;