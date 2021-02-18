const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Enjoy SA Launch - 0.43'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
