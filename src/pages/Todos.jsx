import { useSelector } from 'react-redux';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import ThemeSelector from '../components/ThemeSelector';
import DateTime from '../components/DateTime';

const Todos = () => {
  const theme = useSelector(state => state.theme.current);

  return (
    <div className={theme}>
      <header id="header">
        <h1 id="title" className={theme === 'darker' ? 'darker-title' : ''}>
          Todo List
        </h1>
        <DateTime />
        <ThemeSelector />
      </header>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;