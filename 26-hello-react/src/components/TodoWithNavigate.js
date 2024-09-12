import React from 'react';
import { useNavigate } from 'react-router-dom';
import Todo from './Todo/Todo';

function TodoWithNavigate(props) {
  const navigate = useNavigate();
  return <Todo {...props} navigate={navigate} />;
}

export default TodoWithNavigate;
