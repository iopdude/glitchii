const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
let http = require('http').Server(app);

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
});

http.listen(PORT, (err) => {
    if (err) {
        return console.log('Problem starting server', err);
    }

    console.log(`Listening on ${PORT}`);
});