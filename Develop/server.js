const express = require('express');
const path = require('path');
const dbData = require('./db/db.json');
const PORT = process.env.port || 3001;
const app = express();


// Focus on this app.use.
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/'));
  });
//Focus on this too.
app.get('/notes',(req, res) => {
    console.info(`GET /api/notes`)
    res.sendFile(path.join(__dirname, '/public/notes.html') );
});
app.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add a note.`);
    res.sendFile(path.join(__dirname, '/public/notes.html') );
})
//And this last one too.
app.listen(PORT, () =>
    console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);