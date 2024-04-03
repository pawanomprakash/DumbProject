const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
require('dotenv').config()

app.get('/hello', (req, res) => {
  // Your code here
    res.send('hello world');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
