"use client";

import React, { useState } from 'react';
import TodoItem from '../components/todo-item';
import { Todo } from '../types';

const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const addTodo = () => {
    if (newTodoText.trim() === '') return; // Prevent adding empty todos
    const newTodo: Todo = { id: Date.now(), text: newTodoText, completed: false };
    setTodos(prevTodos => [...prevTodos, newTodo]); // Use functional update for state
    setNewTodoText(''); // Clear input field
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const toggleComplete = (id: number) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={newTodoText} 
        onChange={handleInputChange} 
        placeholder="Add new todo" 
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            editTodo={editTodo} 
            deleteTodo={deleteTodo} 
          />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
