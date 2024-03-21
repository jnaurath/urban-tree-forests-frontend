import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest,
  res: NextApiResponse<ResponseData>) {
  if (req.method === 'GET') {
    // Handle GET request (fetching trees)
    try {
      const response = await fetch('http://localhost:5001/trees');
      const trees = await response.json();
      res.status(200).json(trees);
    } catch (error) {
      console.error('Error fetching trees:', error);
      res.status(500).json({ message: 'Error fetching trees' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request (adding a tree)
    try {
      fetch('http://localhost:5001/tree', {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      // await connectDB();
      // const newTree = new Tree(req.body);
      // await newTree.save();
      res.status(200).json({ message: 'Tree added successfully' });
    } catch (error) {
      console.error('Error adding tree:', error);
      res.status(500).json({ message: 'Error adding tree' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
