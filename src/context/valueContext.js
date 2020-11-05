import React, { useState, useEffect, createContext } from 'react';

const ValueContext = createContext();
const LOCAL_STORAGE_KEY = 'Todo-list';

const ValueProvider = (props) => {
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
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ValueContext.Provider
      value={{
        todos,
        addTodo,
        toggleComplete,
        removeTodo,
      }}
    >
      {props.children}
    </ValueContext.Provider>
  );
};

export { ValueProvider, ValueContext };
