// src/components/JSONBinComponent.js
import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

export const Postsaccordion = (props) => {
  const formInitialsDetail = {
    "id": '',
    "text": '',
    "user": '',
    "likes": '',
    "replies": [
      {
        "id": '',
        "text": '',
        "user": ''
      }
    ]
  };

  const { data } = props;
  const [comment, setComment] = useState(formInitialsDetail);
  const [postId, setPostId] = useState('');

  const onFormUpdate = (id, newComment) => {
    const postToUpdate = data.record.posts.find((post) => post.id === id);

    if (postToUpdate && postToUpdate.comments) {
      const commentSize = postToUpdate.comments.length;

      setPostId(id);
      setComment({
        id: commentSize + 1,
        text: newComment,
        user: `commenter${commentSize + 1}`,
        likes: 0,
        replies: [
          {
            id: '',
            text: '',
            user: '',
          },
        ],
      });
    }
  };
  // Handle Comment
  const handleComment = async (newComment) => {
    try {
      // Use axios or fetch to send the comment data to your API
      // Example: axios.post('/api/comments', { postId, comment });
      console.log('Comment submitted:', postId, comment);
    } catch (error) {
      console.error('Error updating post with comment', error);
    }
  };

  return (
    <>
      {data.record.posts.map((post, index) => (
        <div key={post.id} className="accordion-container">
          <div className="post-container">
            <div className="post-header">
              <div className="post-title"> Title: <span className="post-text-header">{post.title}</span></div>
              <div className="post-id">id: {post.id}  {post.author} </div>
            </div>
            <div className="post-content"> {post.content} </div>
          </div>

          <div className="comment-container">
            {post.comments.map((c, commentIndex) => (
              <div key={c.id} className="comment-box">
                <div className="comment-body">
                  <div>{JSON.stringify(c.text)} </div>
                </div>
                <div className="comment-footer">
                  <div>comment-id: {c.id}</div>
                  <div>commenter: {JSON.stringify(c.user)} </div>
                  <div>Likes: {JSON.stringify(c.likes)}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleComment(comment); }}>
            <div className="comment-button-container">
              <button type="submit" className="comment-button">Comment</button>
              <input type="text" name="commenter" />
            </div>
            <div className="comment-textarea">
              <textarea
                placeholder="Add your comment here"
                name={comment.id}
                value={comment.text}
                onChange={(e) => onFormUpdate(post.id, e.target.value)}
              />
            </div>
            <div className="post-icons"></div>
          </form>
          <hr />
        </div>
      ))}
    </>
  );
};

Postsaccordion.propTypes = {
  data: PropTypes.object.isRequired, // You might want to provide a more specific shape for the 'data' prop
};
