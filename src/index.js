const express = require('express');
const bodyParser = require('body-parser');

const{PORT } = require('./config/server.config.js');
const apiRoutes = require('./routes/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api',apiRoutes);

app.get('/ping', (req, res) => {
  res.send('problem service is alive');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});