const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();
const port = 5000;

app.use(cors())
// Create and initialize the SQLite database
const db = new sqlite3.Database('./posts.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return conole.error(err);
});

// db.serialize(() => {
//   db.run(`create, update, insert`)    go here
//  });
// Endpoint for the root path

//'/

// TODO: GLOBAL VARIABLES
const jsonInitialized = false;
// general sql statments for use in enpoints
const specficPosts = 'SELECT * FROM posts WHERE postStatus LIKE \"Active\" and postId LIKE ?';
const allPostsSql = 'SELECT * FROM posts  WHERE postStatus LIKE \"Active\"';
const allPostCommentsSql = 'SELECT * FROM postCommentsView';
let allPostsJson = [];
let allPostCommentsJson = [];

const allPostsFunction = () => {
  return new Promise((resolve, reject) => {
    db.all(allPostsSql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
      allPostsJson.push(rows);

    });
  });
};

// function to get all post comments
const allPostCommentsFunction = () => {
  return new Promise ((resolve, reject) => {
    db.all(allPostCommentsSql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    })
  })
}

app.get('/', async (req, res) => {
  try {
    const all = []
    const posts = await allPostsFunction();
    allPostsJson.push(posts) // for later use
    all.push(posts);
    const postCommentsView = await allPostCommentsFunction();
    allPostCommentsJson.push(postCommentsView) // for later use
    all.push(postCommentsView);

    console.log(all)
    res.json(all[1]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// const pids = [1, 4];
// const result = [];
// let completedQueries = 0;
// app.get('/', (req, res) => {
//   for (let pid = 0; pid < pids.length; pid++) {
//     db.all(specficPosts, pids[pid], (err, rows) => {
//       completedQueries++;

//       if (err) {
//         res.status(500).json({ error: err.message });
//         return; // Exit the function early to avoid further processing
//       }

//       result.push(rows[0]);

//       // Check if all queries have completed
//       if (completedQueries === pids.length) {
//         res.json(result);
//       }
//     });
//   }
// });