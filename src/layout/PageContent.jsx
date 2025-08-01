import React from 'react';

const PageContent = ({ children }) => {
  return (
    <main className="flex-1">
      {children}
    </main>
  );
};

export default PageContent; 