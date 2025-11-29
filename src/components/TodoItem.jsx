import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`todo standard-todo ${todo.completed ? 'completed' : ''}`}>
      <li className="todo-item">{todo.title}</li>
      <button 
        className="check-btn standard-button"
        onClick={toggleComplete}
      >
        <i className="fas fa-check"></i>
      </button>
      <button 
        className="delete-btn standard-button"
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;