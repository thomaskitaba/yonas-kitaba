import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sqlite = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>React App with Node.js Server and SQLite</h1>
      <h2>ALL Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.postId}>
            ({post.postId}){post.postTitle} - {post.postContent}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sqlite;
