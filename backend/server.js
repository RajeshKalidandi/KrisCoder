const express = require('express');
const cors = require('cors');
const { PythonShell } = require('python-shell');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Input validation middleware
const validateInput = (req, res, next) => {
  const { code, prompt } = req.body;
  
  if (!code || typeof code !== 'string' || code.trim() === '') {
    return res.status(400).json({ error: 'Invalid or missing code' });
  }
  
  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    return res.status(400).json({ error: 'Invalid or missing prompt' });
  }
  
  next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};

// Route for generating code suggestions
app.post('/api/generate', validateInput, (req, res, next) => {
  const { code, prompt } = req.body;
  
  let options = {
    mode: 'text',
    pythonPath: 'python', // or the path to your Python interpreter
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './',
    args: [code, prompt]
  };

  PythonShell.run('llama_integration.py', options).then(results => {
    const suggestion = results[0]; // Assuming the Python script prints the result
    res.json({ suggestion });
  }).catch(err => {
    next(err);
  });
});

// Apply error handling middleware
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
