  const express = require('express');
  const cors = require('cors');
  const sqlite3 = require('sqlite3');

  const app = express();
  const port = 5000;

  app.use(cors())
  // Create and initialize the SQLite database
  const db = new sqlite3.Database('./posts.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);
  });

  // db.serialize(() => {
  //   db.run(`create, update, insert`)    go here
  //  });
  // Endpoint for the root path

  //'/

  // TODO: GLOBAL VARIABLES
  const jsonInitialized = false;
  const all = [];
  // general sql statments for use in enpoints
  const specficPosts = 'SELECT * FROM posts WHERE postStatus LIKE \"Active\" and postId LIKE ?';
  const allPostsSql = 'SELECT * FROM posts  WHERE postStatus LIKE \"Active\"';
  const allPostCommentsSql = 'SELECT * FROM postCommentsView';
  const activePostCommentsViewSql = 'SELECT * FROM activePostCommentsView';
  const activeCommentsViewSql = 'SELECT * FROM activeCommentsView';
  const activePostsViewSql = 'SELECT * FROM activePostsView';
  const activeRepliesViewSql = 'SELECT * FROM activeRepliesView';

  let allPostsJson = [];
  let allPostCommentsComment = [];


  let activeCommentsViewJson = [];
  let activePostsCommentsView = []
  let activePostsView = []
  let activeRepliesView = []
  let allPostCommentsJson = [];



  //

  const allPostsFunction = () => {
    return new Promise((resolve, reject) => {
      db.all(allPostsSql, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);

      });
    });
  };

  // function to get all post comments




  const activePostsCommentsViewFunction = () => {
    return new Promise((resolve, reject) => {
      db.all(activePostCommentsViewSql, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  const activeCommentsViewFunction = () => {
    return new Promise((resolve, reject) => {
      db.all(activeCommentsViewSql, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      })
    });
  }

  const activePostsViewFunction = () => {
    return new Promise((resolve, reject) => {
      db.all(activePostsViewSql, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      })
    })
  }

  const activeRepliesViewFunction = () => {
    return new Promise((resolve, reject) => {
      db.all(activeRepliesViewSql, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      })
    })
  }

  // TODO: ==== NO AUTHORIZATION NEDED =====

  app.get('/', async (req, res) => {
    let allData = [];
    try {
      const activePostCommentsViewTemp = await activePostsCommentsViewFunction();
      allData.push(activePostCommentsViewTemp);

      const activeCommentsViewTemp= await activeCommentsViewFunction();
      allData.push(activeCommentsViewTemp);
      console.log(activeCommentsViewTemp);

      const activePostsViewTemp = await activePostsViewFunction();
      allData.push(activePostsViewTemp);
      // console.log(activePostsViewTemp);

      const activeRepliesViewTemp = await activeRepliesViewFunction();
      allData.push(activeRepliesViewTemp);
      // console.log(activeRepliesViewTemp);
      res.json(allData);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: error.stack})
    }
  });

  app.get('/api/posts', async (req, res) => {
    try {
      const posts = await allPostsFunction();
      allPostsJson.push(posts) // for later use
      res.json(posts);

    } catch (error) {
      res.status(500).json({ error: error.stack });
    }
  });

  // TODO   signup    registration doesnot require authorization

  // TODO:   ====== AUTHORIZATION NEDED====== to perform these activities

  // comment Mangement
  app.post('/api/comments/add', async (req, res) => {
  try {
    res.send("pass [postId, commentContent, userId] : to create new comment for a post")
  } catch(error) {
    res.status(500).json({error: error.stack});
  }
  });

  app.post('/api/comments/edit', async(req, res) => {
    try {
      res.send('send [commentId, userId] to edit your comment');
    } catch(error) {
      res.status(500).json({error: error.stack});
    }
  });

  app.post('api/comments/delete', async(req, res) => {
    try {
      res.send('provide [commentId, userId] to delete your comment' )
    } catch(error) {
      res.status(500).json({error: error.stack});
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
