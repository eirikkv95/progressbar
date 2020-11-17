import React, { useState, useEffect, createContext } from 'react';

const TodoContext = createContext();
const LOCAL_STORAGE_KEY = 'Todo-list';

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((todos) =>
      todos
        .map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
        .sort((a, b) => a.completed - b.completed)
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        toggleComplete,
        removeTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
