const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const app = express();
const port = 3000;

const client = new Client({ node: 'http://localhost:9200' });

app.use(express.json());

app.post('/api/orders', async (req, res) => {
  const { firstName, lastName, address, email, products } = req.body;

  const order = {
    firstName,
    lastName,
    address,
    email,
    products,
    date: new Date()
  };

  try {
    await client.index({
      index: 'orders',
      document: order
    });
    res.status(200).send('Order saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving order');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
