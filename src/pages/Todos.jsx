import { useSelector } from 'react-redux';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import ThemeSelector from '../components/ThemeSelector';
import DateTime from '../components/DateTime';

const Todos = () => {
  const theme = useSelector(state => state.theme.current);

  return (
    <div className={theme}>
      <div id="header">
        <div className="flexrow-container">
          <ThemeSelector />
        </div>
        <h1 id="title">
          Just do it<span className="pulse">.</span>
        </h1>
      </div>
      <div id="form">
        <AddTodoForm />
      </div>
      <div>
        <DateTime />
      </div>
      <div id="myUnOrdList">
        <TodoList />
      </div>
    </div>
  );
};

export default Todos;