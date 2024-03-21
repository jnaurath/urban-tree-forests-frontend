"use client"
import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react'
import Layout from '@/components/layout'
import NestedLayout from '@/components/nested-layout'
import type { NextPageWithLayout } from '../_app'

import TreeList from '@/components/tree/treeList';
import TreeForm from '@/components/tree/treeForm';

const TreePage = () => {
  // const [trees, setTrees] = useState([]);
  // const [treeData, setTreeData] = useState({
  //   name: '',
  //   species: '',
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/trees');
  //       const data = await response.json();
  //       setTrees(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // const handleChange = (e) => {
  //   console.log(e)
  //   setTreeData(
  //     // { ...treeData, [e.target.name]: e.target.value }
  //     {treeData}
  //   );
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("handleSubmit", e.data)
  //   // try {
  //   //   await connectDB();
  //   //   const newTree = new Tree(treeData);
  //   //   await newTree.save();
  //   //   console.log('Tree added successfully');
  //   // } catch (error) {
  //   //   console.error('Error adding tree:', error);
  //   // }
  // };

  return (
    <div>
      <TreeList />
      <TreeForm onTreeAdded={() => TreeList.fetchData()}/>
      {/* <div>
        <h1>Nearby Trees</h1>
        {trees.map((tree, index) => (
          <div key={index}>
            <h3>{tree.name}</h3>
            <p>Species: {tree.species}</p>
            <p>Height: {tree.height} meters</p>
            <hr/>
          </div>
        ))}
      </div>

      <div>
      <h1>Add a Tree</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={treeData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={treeData.species}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Tree</button>
      </form>
    </div> */}
    </div>
  );
};

TreePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default TreePage;

 

 