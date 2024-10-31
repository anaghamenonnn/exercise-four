const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Index Route');
  });

  module.exports = router;