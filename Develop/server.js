const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Focus on this app.use.
app.use();

//Focus on this too.
app.get('/notes',(req, res) => );

//And this last one too.
app.listen(PORT, () =>
    console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);