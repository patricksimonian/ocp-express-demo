const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.status(200).json({message: 'good to go yo'});
});

app.listen(3000, () => {
  console.log('server is up');
});