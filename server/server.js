const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    cors = require('cors'),
    http = require('http');


//Express Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

require('./route')(app);

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '/../dist')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../dist/'));
});

// Set Port & Create Server
const port = process.env.PORT || 3100;
app.set('port', port);
const server = http.createServer(app);

// Listen to port
server.listen(port, () => { console.log(`Server listening on port ${port}`) });