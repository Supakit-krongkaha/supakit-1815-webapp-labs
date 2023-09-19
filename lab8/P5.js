const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});
app.get('/myip', async (req, res) => {
  try {
    const response = await axios.get('https://httpbin.org/ip');
    const ip = response.data.origin;
    res.json({ ip });
  } catch (error) {
    res.status(500).json({ error: 'การดึงหมายเลข IP ล้มเหลว' });
  }
});
app.listen(port, () => {
  console.log(`The server is running on the port. ${port}`);
});
