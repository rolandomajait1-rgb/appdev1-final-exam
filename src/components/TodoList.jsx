import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector(state => state.todos.items);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;