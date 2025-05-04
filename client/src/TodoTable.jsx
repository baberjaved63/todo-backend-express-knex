import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TodoTable = ({ todos, toggleComplete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.url}>
            <td>{todo.order}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
            <td>
              <Button
                variant={todo.completed ? 'success' : 'outline-success'}
                onClick={() => toggleComplete(todo)}
              >
                {todo.completed ? 'Completed' : 'Mark as Done'}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TodoTable;
