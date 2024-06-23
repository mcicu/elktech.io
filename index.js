const express = require('express');
const port = 9000;

const app = express();
app.use(express.static('static'));


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});