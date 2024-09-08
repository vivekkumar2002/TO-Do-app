// src/app/todo/[id]/page.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { Todo } from '../../../types';

const TodoDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch todo details based on `id` (you would typically fetch from a server)
  const todo: Todo = { id: Number(id), text: 'Sample Todo', completed: false };

  return (
    <div>
      <h2>Todo Details</h2>
      <p>ID: {todo.id}</p>
      <p>Text: {todo.text}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default TodoDetailPage;
