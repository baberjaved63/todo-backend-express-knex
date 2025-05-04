import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col md={10}>
          <Form.Control
            type="text"
            placeholder="Enter new todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Button type="submit" variant="primary" className="w-100">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;