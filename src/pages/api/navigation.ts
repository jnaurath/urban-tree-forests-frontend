import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
    try {
        const navigationData = [
            { id: 1, label: 'Home', link: '/' },
            { id: 2, label: 'About', link: '/about' },
            { id: 3, label: 'Contact', link: '/contact' },
            // Additional navigation items
        ];
        res.status(200).json(navigationData.toString());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}