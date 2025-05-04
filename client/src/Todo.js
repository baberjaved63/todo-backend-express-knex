import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoTable from './TodoTable';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos/');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (title) => {
    try {
      const newTodo = {
        title,
        order: todos.length + 1,
        completed: false,
      };
      const response = await axios.post('http://localhost:5000/todos/', newTodo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleComplete = async (todo) => {
    try {
      const updatedTodo = { ...todo, completed: !todo.completed };
      await axios.put(todo.url, updatedTodo);
      setTodos(todos.map(t => t.url === todo.url ? updatedTodo : t));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoTable todos={todos} toggleComplete={toggleComplete} />
    </Container>
  );
};


export default Todo;
