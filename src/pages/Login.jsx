import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../utils/todosAPI';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const theme = useSelector(state => state.theme.current);
  const SECRET_PASSWORD = import.meta.env.VITE_APP_SECRET_PASSWORD;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    getUsers();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD && selectedUser) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', selectedUser);
      navigate('/todos');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div id="header" className="login">
      <h1 id="title">Login</h1>
      <form onSubmit={handleLogin}>
        <select
          className={`${theme}-input`}
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          required
        >
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user.id} value={user.username}>
              {user.name} ({user.username})
            </option>
          ))}
        </select>
        <input
          className={`${theme}-input`}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={`${theme}-button`} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;