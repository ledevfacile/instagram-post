// src/Post.js
import React, { useState } from 'react';
import './Post.css';

const initialComments = [
  {
    id: 1,
    author: 'Utilisateur1',
    text: 'Super post!',
    replies: [
      {
        id: 3,
        author: 'Utilisateur3',
        text: "Je suis d'accord!",
      },
    ],
  },
  {
    id: 2,
    author: 'Utilisateur2',
    text: 'Cool',
    replies: [],
  },
];

const Post = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const newCommentObject = {
      id: Date.now(), // Using timestamp as a unique ID
      author: 'Le Dev Facile', // Placeholder for current user
      text: newComment,
      replies: [],
    };

    setComments([...comments, newCommentObject]);
    setNewComment('');
  };

  const renderComments = (commentsList) => {
    return commentsList.map((comment) => (
      <div key={comment.id}>
        <div>
            <span className="comment-author">{comment.author}</span>: <span className='comment-text'>{comment.text}</span>
            <i className="icon">👍</i>
            <i className="icon" onClick={() => alert('Ajouter la fonction de réponse')}>💬</i>
        </div>
        
        {comment.replies.length > 0 && (
          <div>
            {renderReplies(comment.replies)}
          </div>
        )}
      </div>
    ));
  };

  const renderReplies = (commentsList) => {
    return commentsList.map((comment) => (
      <div key={comment.id} className="comment-reply">
        <div>
            <span className="comment-author">{comment.author}</span>: <span className='comment-text'>{comment.text}</span>
            <i className="icon">👍</i>
            <i className="icon" onClick={() => alert('Ajouter la fonction de réponse')}>💬</i>
        </div>

      </div>
    ));
  };

  return (
    <div className="post">
      <div className="post-header">
        <img className="profile-pic" src="https://via.placeholder.com/50" alt="Profile" />
        <div className="profile-info">
          <span className="profile-name">Le Dev Facile</span>
          <span className="profile-username">@ledevfacile</span>
        </div>
      </div>
      <img className="post-image" src="https://via.placeholder.com/600x400" alt="Post" />
      <div className="post-actions">
        <i className="icon">❤️</i>
        <i className="icon">💬</i>
        <i className="icon">🔗</i>
      </div>
      <div className="post-comments">
        {renderComments(comments)}
      </div>
      <div className="post-footer">
        <input
          className="comment-input"
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
        />
        <button className="comment-button" onClick={handleAddComment}>Poster</button>
      </div>
    </div>
  );
};

export default Post;