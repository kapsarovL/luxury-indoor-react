import app from '../server/index.js';

// Handler for Vercel serverless functions
// The Express app handles all routing
const handler = (req, res) => {
  app(req, res);
};

export default handler;
