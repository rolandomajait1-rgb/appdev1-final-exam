import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/todos/themeSlice';

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (theme) => {
    dispatch(changeTheme(theme));
  };

  return (
    <div className="theme-selector">
      <button 
        className="theme-selector__item standard-theme"
        onClick={() => handleThemeChange('standard')}
      ></button>
      <button 
        className="theme-selector__item light-theme"
        onClick={() => handleThemeChange('light')}
      ></button>
      <button 
        className="theme-selector__item darker-theme"
        onClick={() => handleThemeChange('darker')}
      ></button>
    </div>
  );
};

export default ThemeSelector;