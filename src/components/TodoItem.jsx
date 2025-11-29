import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoAsync, deleteTodoAsync } from '../features/todos/todoSlice';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.current);

  const handleCheck = () => {
    dispatch(toggleTodoAsync({ id: todo.id, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id));
  };

  return (
    <div className={`todo ${theme}-todo ${todo.completed ? 'completed' : ''}`}>
      <li className="todo-item">{todo.title}</li>
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