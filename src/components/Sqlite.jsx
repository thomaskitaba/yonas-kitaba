import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sqlite = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h1>React App with Node.js Server and SQLite</h1>
      <h2>Post List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.postId}>
            {post.postTitle} - {post.postContent}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sqlite;
