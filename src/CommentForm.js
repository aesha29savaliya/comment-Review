import React, { useState } from 'react';
import './App.css';

const CommentForm = ({ onCommentSubmit }) => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [comment, setComment] = useState('');

     const handleSubmit = (e) => {
          e.preventDefault();
          const newComment = {
               name,
               email,
               comment,
          };
          onCommentSubmit(newComment);
          setName('');
          setEmail('');
          setComment('');
     };
     return (
          <form onSubmit={handleSubmit}>
               <div>
                    <label htmlFor="name">Name : </label>
                    <input
                         type="text"
                         id="name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         required
                    />
               </div>
               <br />
               <div>
                    <label htmlFor="email">Email : </label>
                    <input
                         type="email"
                         id="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                    />
               </div>
               <br />
               <div>
                    <label htmlFor="comment">Comment : </label>
                    <textarea
                         id="comment"
                         value={comment}
                         onChange={(e) => setComment(e.target.value)}
                         rows="2"
                         required
                    />
               </div>
               <br />
               <button type="submit">Submit</button>
          </form>
     );
}

export default CommentForm
