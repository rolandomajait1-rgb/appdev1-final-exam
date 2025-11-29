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
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <button 
        className={`check-btn ${todo.completed ? 'completed' : ''}`}
        onClick={handleCheck}
      >
        {todo.completed && <i className="fas fa-check"></i>}
      </button>
      <span className="todo-item">{todo.title}</span>
      <button 
        className="delete-btn"
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;