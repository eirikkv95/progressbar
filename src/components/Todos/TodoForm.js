import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Add from './add';

const TodoForm = ({ addTodo }) => {
  const [todoForm, setTodoForm] = useState({
    id: '',
    task: '',
    completed: false,
    time: '',
  });

  const handleTaskInputChange = (e) => {
    setTodoForm({ ...todoForm, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoForm.task.trim()) {
      let dateObj = new Date();
      let day = dateObj.getDate();
      let month = dateObj.getMonth();
      let year = dateObj.getFullYear();

      let newDate = `${day} / ${month} / ${year}`;
      addTodo({ ...todoForm, id: uuidv4(), time: newDate });
      // reset task input
      setTodoForm({ ...todoForm, task: '' });
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="task"
          type="text"
          value={todoForm.task}
          onChange={handleTaskInputChange}
        />
        <Button>
          <Add />
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
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
`;
