import React, { useContext } from 'react';
import MyContext from './MyContext';

const Sqlite = () => {
  const { Database, setDatabase } = useContext(MyContext);
  const { userEmail, setUserEmail} = useContext(MyContext);
  const { userName, setUserName} = useContext(MyContext);
  // const [posts] = Database[2];
  return (
    <div>
      <h1>React App with Node.js Server and SQLite</h1>
      <h2>ALL Posts</h2>
      <ul>
        <h6> UserName: {userName}</h6>
        <h6> UserEmail: {userEmail}</h6>

        {Database && Database.length > 0 ? (
          Database[2].map(post => (
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
