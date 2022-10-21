//Install express server
const express = require('express');
const path = require('path');
const  PORT = process.env.PORT || '8080'

const app = express();

app.set("port", PORT);


// // Serve only the static files form the dist directory
// app.use(express.static('.dist/recosystem'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/recosystem/'}),
// );

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);