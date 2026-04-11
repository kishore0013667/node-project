const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello! Server is running 🚀');
});

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});