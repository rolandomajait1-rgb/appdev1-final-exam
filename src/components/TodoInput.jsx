import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.current);

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
        placeholder="Enter a todo..."
      />
      <button type="submit" className={`todo-btn ${theme}-button`}>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default TodoInput;