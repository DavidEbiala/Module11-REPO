const express = require('express');
const path = require('path');
const dbData = require('./db/db.json');

const app = express();
const PORT = 3001;

// Focus on this app.use.
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/'));
  });
//Focus on this too.
app.get('/notes',(req, res) => res.json(dbData) );

//And this last one too.
app.listen(PORT, () =>
    console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);