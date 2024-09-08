// src/app/layout.tsx
import React from 'react';
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <head />
      <body>
        <header>
          <h1>My To-Do App</h1>
        </header>
        {children} {/* Render page-specific content */}
      </body>
    </html>
  );
};

export default RootLayout;
