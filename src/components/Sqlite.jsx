import React, { useContext } from 'react';
import MyContext from './MyContext';

const Sqlite = () => {
  const { posts } = useContext(MyContext);

  return (
    <div>
      <h1>React App with Node.js Server and SQLite</h1>
      <h2>ALL Posts</h2>
      <ul>
        {posts && posts.length > 0 ? (
          posts[2].map(post => (
            <li key={post.postId}>
              ({post.postId}) {post.postTitle} - {post.postContent}
            </li>
          ))
        ) : (
          <li>No posts available</li>
        )}
      </ul>
    </div>
  );
};

export default Sqlite;
