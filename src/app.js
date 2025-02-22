const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const web3 = require('./web3');

app.use(express.static(path.join(__dirname)));

app.get('/api/block/:blockNumber', async (req, res) => {
  try {
    const block = await web3.eth.getBlock(req.params.blockNumber);
    res.json(block);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/transaction/:hash', async (req, res) => {
  try {
    const transaction = await web3.eth.getTransaction(req.params.hash);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/receipt/:hash', async (req, res) => {
  try {
    const receipt = await web3.eth.getTransactionReceipt(req.params.hash);
    res.json(receipt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});