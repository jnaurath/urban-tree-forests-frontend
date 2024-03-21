// components/nested-layout.tsx

import React from 'react';

const NestedLayout: React.FC = ({ children }) => {
  return (
    <div>
      <h2>Nested Layout Component</h2>
      <div>{children}</div>
      {/* Additional layout content */}
    </div>
  );
};

export default NestedLayout;
