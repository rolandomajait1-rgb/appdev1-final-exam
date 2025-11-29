import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/todos/themeSlice';

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (theme) => {
    dispatch(changeTheme(theme));
  };

  return (
    <>
      <div 
        className="standard-theme theme-selector"
        onClick={() => handleThemeChange('standard')}
      ></div>
      <div 
        className="light-theme theme-selector"
        onClick={() => handleThemeChange('light')}
      ></div>
      <div 
        className="darker-theme theme-selector"
        onClick={() => handleThemeChange('darker')}
      ></div>
    </>
  );
};

export default ThemeSelector;