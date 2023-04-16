// This is our server side
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

// for the server will understand incoming data as json
app.use(express.json({limit:'1mb'}))
let notes = []

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public/saveNotes.html'));
})

app.get('/saveNotes', (request, response) => {
    response.sendFile(path.join(__dirname, 'public/saveNotes.html'));
})
 
app.get('/getNotes', function(request, response) {
    response.sendFile(path.join(__dirname, 'public/getNotes.html'));
    console.log("I got a request to show notes! :D");
    response.json({
        status: 'Received!',
        notes: notes
    });
});

app.post('/save', (request, response) => {
    console.log("I got a request to save! :D");
    const data = request.body;
    console.log(data);
    notes.push(data);
    response.json({
        status: 'Received!',
        note: data
    });
})


app.listen(3000, () => console.log('listening at 3000'));