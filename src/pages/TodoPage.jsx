import { useSelector } from 'react-redux';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import ThemeSelector from '../components/ThemeSelector';
import DateTime from '../components/DateTime';

const TodoPage = () => {
  const theme = useSelector(state => state.theme.current);

  return (
    <div className={theme}>
      <header>
        <h1 id="title" className={theme === 'darker' ? 'darker-title' : ''}>
          Todo List
        </h1>
        <DateTime />
      </header>
      <TodoInput />
      <TodoList />
      <ThemeSelector />
    </div>
  );
};

export default TodoPage;