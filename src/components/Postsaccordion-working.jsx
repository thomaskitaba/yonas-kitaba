// src/components/JSONBinComponent.js
import React, { useEffect, useState } from 'react';
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
  const [checked, setChecked] = useState(false);
  const [displayText, setDisplayText] = useState('Expand individually');
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
      alert(`postid=${postId}  and comment=${comment}`);
      console.log('Comment submitted:', postId, comment);
      alert("hello Thomas kitaba");
    } catch (error) {
      console.error('Error updating post with comment', error);
    }
  };


  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    setDisplayText(e.target.checked ? 'Expand All' : 'Expand individually');
    // alert("hello thomas kitaba");
  };

  return (
    <>
    <div class="toggle">
      <input type="checkbox" name="toggle" class="toggle-cb" id="toggle-0" onChange={handleCheckboxChange}/>
      <label class="toggle-label" for="toggle-0">
          <div class="toggle-inner"></div>
          <div class="toggle-switch"></div>
          <div class="display-text">{displayText}</div>
      </label>
      {/* <input type="checkbox" name="allposts" onChange={handleCheckboxChange}/>
        <label htmlFor="allposts">{displayText}</label> */}
    </div>
    <div class="accordion accordion-flush half-width" id="accordionFlushExample">
      {data.record.posts.map((post, index) => (
        <div class="accordion-item">
      <h2 class="accordion-header">

      <button
        className="accordion-button collapsed bg-green"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={checked ? "#flush-collapse" : `#flush-collapse-${post.id}`}
        aria-expanded='true'
        aria-controls={checked ? "flush-collapse" : `flush-collapse-${post.id}`}
      >
        <div className="accordion-button-display">
          <h3>{post.id}</h3>
          <h3>{post.title}</h3>
          <h3>{post.date ? post.date : ''}</h3>
          <h3>{post.author ? post.author : 'website owner'}</h3>
        </div>
      </button>
      </h2>
      <div id={checked ? "flush-collapse" : `flush-collapse-${post.id}`} class="accordion-collapse collapse bg-green" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        {/* Post part */}
          <div className="post-content">{post.content}</div>
          {/* comment part */}
          {/* comment content part */}
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
            {/* comment form */}
            <form onSubmit={(e) => { e.preventDefault(); handleComment(comment); }}>
            <div className="comment-button-container">
              <button type="submit" className="comment-button">Comment</button>
              <input type="text" name="commenter" />
            </div>
            <div className="comment-textarea">
              <textarea
                placeholder="Add your comment here"
                name={`comment${comment.id}`}
                value={comment.text}
                onChange={(e) => onFormUpdate(post.id, e.target.value)}
              />
            </div>
            <div className="post-icons"></div>
          </form>
          </div>
          <code>.accordion-flush</code>
          </div>
      </div>
  </div>
  ))}
    </div>

    </>
  );
};
