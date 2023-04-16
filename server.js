// This is our server side
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

// // so the server will understand incoming data as json
// app.use(express.json({limit:'1mb'}))
// let notes = []

// app.get('/', (request, response) => {
//     ...
// })

// app.get('/saveNotes', (request, response) => {
//     ...
// })
 
// app.get('/getNotes', function(request, response) {
//     ...
// });

// app.post('/save', (request, response) => {
//     ...
// })


app.listen(3000, () => console.log('listening at 3000'));