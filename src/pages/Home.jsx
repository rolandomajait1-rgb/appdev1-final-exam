import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const theme = useSelector(state => state.theme.current);

  return (
    <div id="header">
      <h1 id="title">Welcome to the TODO App</h1>
      <p className="standard-text">Manage your tasks efficiently with our simple todo application.</p>
      <div>
        <Link to="/login">
          <button className={`${theme}-button standalone-button`}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;