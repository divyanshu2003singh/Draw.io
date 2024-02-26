// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5090;

app.use(bodyParser.json());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to save drawing
app.post('/api/saveDrawing', (req, res) => {
  const { drawing } = req.body;
  const base64Data = drawing.replace(/^data:image\/png;base64,/, '');
  const timestamp = Date.now(); // Use timestamp as the filename
  const fileName = `drawing_${timestamp}.png`;
  const filePath = path.join(__dirname, 'drawings', fileName);

  fs.writeFile(filePath, base64Data, 'base64', (err) => {
    if (err) {
      console.error('Error saving drawing:', err);
      res.status(500).json({ error: 'Error saving drawing' });
    } else {
      console.log('Drawing saved successfully!');
      res.status(200).json({ message: 'Drawing saved successfully', fileName });
    }
  });
});

// Endpoint to serve saved drawings
app.get('/api/drawings/:fileName', (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, 'drawings', fileName);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Drawing not found' });
  }
});

// Catch-all endpoint to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
