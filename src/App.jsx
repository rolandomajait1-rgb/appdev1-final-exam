import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Todos from './pages/Todos';
import ThemeSelector from './components/ThemeSelector';
import './App.css';
import './styles/fonts.css';
import './styles/main.css';

function App() {
  const theme = useSelector(state => state.theme.current);

  return (
    <div className={theme}>
      <div className="flexrow-container">
        <ThemeSelector />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App
