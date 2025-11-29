import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.current);

  const handleCheck = () => {
    dispatch(toggleTodo(index));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className={`todo ${theme}-todo ${todo.completed ? 'completed' : ''}`}>
      <li className="todo-item">{todo.text}</li>
      <button 
        className={`check-btn ${theme}-button`}
        onClick={handleCheck}
      >
        <i className="fas fa-check"></i>
      </button>
      <button 
        className={`delete-btn ${theme}-button`}
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;