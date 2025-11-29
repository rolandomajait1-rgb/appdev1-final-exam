import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.items);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;