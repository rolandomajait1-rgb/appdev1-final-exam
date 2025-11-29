import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from '../features/todos/todoSlice';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import ThemeSelector from '../components/ThemeSelector';
import DateTime from '../components/DateTime';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log('Todos:', todos); // Debug log

  return (
    <div>
      <div id="header">
        <h1 id="title">Just do it.</h1>
      </div>
      <div id="form">
        <AddTodoForm />
      </div>
      <div>
        <p><span id="datetime"><DateTime /></span></p>
      </div>
      <div id="myUnOrdList">
        <TodoList />
      </div>
    </div>
  );
};

export default Todos;