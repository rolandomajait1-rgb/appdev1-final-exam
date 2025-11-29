import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchTodos } from '../features/todos/todoSlice';

const AddTodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.current);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = input.trim();
    if (todoText === '') {
      alert('You must write something!');
      return;
    }
    dispatch(addTodo(todoText));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={`todo-input ${theme}-input`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task."
      />
      <button type="submit" className={`todo-btn ${theme}-button`}>
        I Got This!
      </button>
    </form>
  );
};

export default AddTodoForm;