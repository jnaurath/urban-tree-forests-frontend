// components/TreeForm.js
import React, { useState } from 'react';

interface TreeData {
  name: string;
  species: string;
  height: number;
}

// Define the type for the function that adds a tree
type OnTreeAdded = (tree: TreeData) => void;

const TreeForm = ( onTreeAdded: OnTreeAdded ) => {
  const [treeData, setTreeData] = useState({
    name: '',
    species: '',
    height: 0
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setTreeData({ ...treeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/trees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(treeData),
      });

      if (response.ok) {
        console.log('Tree added successfully');
        // onTreeAdded();
        // Optionally, you can fetch the updated list of trees after adding a new one.
      } else {
        console.error('Error adding tree');
      }
    } catch (error) {
      console.error('Error adding tree:', error);
    }
  };

  return (
    <div>
      <h1>Add a Tree</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={treeData.name}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={treeData.species}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            name="height"
            value={treeData.height}
            onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Tree</button>
      </form>
    </div>
  );
};

export default TreeForm;
