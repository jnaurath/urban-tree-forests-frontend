// components/TreeList.js
import React, { useEffect, useState } from 'react';

const TreeList = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/trees');
        const data = await response.json();
        setTrees(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Nearby Trees</h1>
      {trees.map((tree: any, index) => (
        <div key={index}>
          <h3>{tree.name}</h3>
          <p>Species: {tree.species}</p>
          <p>Height: {tree.height} meters</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TreeList;
