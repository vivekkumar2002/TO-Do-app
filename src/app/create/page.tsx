// src/app/create/page.tsx
"use client";
import React, { useState } from 'react';
import TodoForm from '../../components/todo-form';
import { Todo } from '../../types'; // Check if '../types' is the correct path


const CreatePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Ideally, this would be fetched from a server

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>Add New Todo</h2>
      <TodoForm addTodo={addTodo} />
      <a href="/">Back to List</a>
    </div>
  );
};

export default CreatePage;
