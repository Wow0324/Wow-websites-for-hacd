const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 8001;

// // 👇️ "/home/john/Desktop/javascript"
// const __dirname = path.dirname(__filename);


app.use(cors());
app.get('/api/diamond/createtxs', async (req, res) => {
  try {
    const response = await axios.get('https://explorer.hacash.org/api/diamond/createtxs');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/diamond/hacd', async (req, res) => {
  try {
    const { number } = req.query;
    const response = await axios.get(`https://hacd.art/api/index/hacd?number=${number}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/diamond/quotefee', async (req, res) => {
  try {
    const { txhash, fee, password } = req.query;
    const response = await axios.get(`http://54.193.49.59:3338/query?action=quotefee&txhash=${txhash}&fee=${fee}&password=${password}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/pool/table', createProxyMiddleware({
  target: 'http://104.217.254.247:3340',
  changeOrigin: true,
}));


app.use(express.static(path.join(__dirname, "./build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});