const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();
const port = 5000;

// Create and initialize the SQLite database
const db = new sqlite3.Database('./posts.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return conole.error(err);
});

// db.serialize(() => {
//   db.run(`create, update, insert`)    go here
//  });
// Endpoint for the root path

//

app.get('/', (req, res) => {
  // res.json('Welcome to thomas kitaba');
  db.all('SELECT * FROM posts', (err, rows)=> {
    if(err) {
      res.status(500).json({error: err.message})
      return;
    }
    res.json(rows)
  });
});

app.get('/api/posts', (req, res) => {
  db.all('SELECT * FROM posts', (err, rows)=> {
    if(err) {
      res.status(500).json({error: err.message})
      return;
    }
    res.json(rows)
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
