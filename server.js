const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Example: Save creator ID
app.post('/save-creator', (req, res) => {
  const { creatorId, passphrase } = req.body;

  if (!creatorId || !passphrase) {
    return res.status(400).json({ error: 'Missing data' });
  }

  // TODO: Connect to Google Sheets here
  console.log('Saving creator:', creatorId, passphrase);

  res.json({ status: 'success' });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});
