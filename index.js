// app.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/generate', async (req, res) => {
  const { diagram } = req.body;
  try {
    const payload = {
      diagram_source: diagram
    };

    const response = await axios.post(`https://kroki.io/mermaid/svg`, payload);
    res.set('Content-Type', 'image/svg+xml');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating diagram');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
