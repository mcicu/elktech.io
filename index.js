const express = require('express');
const cors = require('cors');
const port = 9000;

const app = express();
app.use(cors());
app.use(express.static('static'));


app.get('/', (req, res) => {
    res.sendFile('html/index.html', {root: __dirname});
});

app.get('/code-of-conduct', (req, res) => {
    res.sendFile('html/code-of-conduct.html', {root: __dirname});
});

app.get('/ownership-disclosure', (req, res) => {
    res.sendFile('html/ownership-disclosure.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});