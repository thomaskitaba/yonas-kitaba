const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();
const port = 5000;

// Create and initialize the SQLite database
const db = new sqlite3.Database('./posts.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return conole.error(err);
});

// Use cors middleware
app.use(cors());

// Create a table for posts if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS posts (
    postId INTEGER PRIMARY KEY AUTOINCREMENT,
    postTitle TEXT,
    postContent TEXT,
    postDate DATETIME,
    updateDate DATETIME,
    commentId INTEGER,
    authorId INTEGER,
    FOREIGN KEY(commentId) REFERENCES comment(commentId),
    FOREIGN KEY(authorId) REFERENCES user(userId)
  )
`);

// Endpoint for the root path
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
  console.log('Welcome to thomas kitabas server');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
