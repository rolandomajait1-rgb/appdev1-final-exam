import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const theme = useSelector(state => state.theme.current);

  return (
    <div id="header">
      <h1 id="title">Welcome to TaskMaster Pro</h1>
      <p className="standard-text">Your Ultimate Productivity Companion</p>
      
      <div className="features-section">
        <div className="feature-item">
          <h3>🎯 Smart Task Management</h3>
          <p>Organize, prioritize, and track your daily tasks with ease</p>
        </div>
        
        <div className="feature-item">
          <h3>🎨 Multiple Themes</h3>
          <p>Choose from Standard, Light, or Darker themes to match your style</p>
        </div>
        
        <div className="feature-item">
          <h3>⏰ Real-Time Updates</h3>
          <p>Stay synchronized with live clock and instant task updates</p>
        </div>
        
        <div className="feature-item">
          <h3>🔐 Secure Authentication</h3>
          <p>Protected user sessions with JSONPlaceholder API integration</p>
        </div>
      </div>
      
      <div className="cta-section">
        <p className="standard-text">Ready to boost your productivity?</p>
        <Link to="/login">
          <button className={`${theme}-button standalone-button`}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;