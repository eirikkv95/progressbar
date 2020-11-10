import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Add from './add';

const TodoForm = ({ addTodo }) => {
  const [todoForm, setTodoForm] = useState({
    id: null,
    task: '',
    completed: false,
    time: '',
  });
  let inputRef = useRef(null);

  const handleTaskInputChange = (e) => {
    setTodoForm({
      ...todoForm,
      task: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoForm.task.trim()) {
      addTodo({ ...todoForm, id: uuidv4() });
      // reset task input
      setTodoForm({ ...todoForm, task: '' });
      inputRef.current.focus();
    }
  };
  return (
    <Space>
      <Form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          name="task"
          type="text"
          value={todoForm.task}
          onChange={handleTaskInputChange}
          placeholder="What are your goals today?"
        />
        <Button type="submit">
          <Add />
        </Button>
      </Form>
    </Space>
  );
};

export default TodoForm;

const Space = styled.div`
  @media (max-width: 980px) {
    margin: 0 6rem;
  }
  @media (max-width: 660px) {
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  font-size: 1.6rem;
  border: none;
  padding: 1.6rem;
  border-radius: 1rem;
  color: #fafafa;
  min-width: 86%;
  margin-right: auto;
  background: rgb(0, 0, 0, 30%);
  backdrop-filter: blur(250px);
  box-shadow: 0px 20px 40px rgba(33, 62, 124, 0.35),
    0px 20px 40px rgba(33, 62, 124, 0.25);
  @media (max-width: 660px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1.2rem 1.6rem;
  }
`;
const Button = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 1rem;
  margin-left: 1.2rem;
  background: #1d2123;
  border-radius: 1rem;
  background: rgb(0, 0, 0, 30%);
  backdrop-filter: blur(250px);
  box-shadow: 0px 20px 40px rgba(33, 62, 124, 0.35),
    0px 20px 40px rgba(33, 62, 124, 0.25);

  @media (max-width: 660px) {
    display: none;
  }
`;
