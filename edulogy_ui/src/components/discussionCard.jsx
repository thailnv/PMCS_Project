import React from 'react';
import { Link } from 'react-router-dom';

function DiscussionCard(props) {
  return (
    <div className="discussion-card">
      <div className="author-and-replies">
        <div className="author-avatar">T</div>
        <div className="author-name">Tuấn</div>
        <div className="reply-quantity">4</div>
        <div className="reply-quantity-suffix">trả lời</div>
      </div>

      <div className="content-detail">
        <Link to='/discussions/1' className="discussion-title">Phân biệt Most of... và Almost</Link>
        <div className="discussion-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio deserunt non, sit, dignissimos fuga fugiat id nobis similique eum vero quas inventore, quasi explicabo adipisci error est tenetur expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dicta excepturi perspiciatis molestiae et aliquid blanditiis debitis, deleniti ea nisi at sint eius natus facere, nam ut laboriosam officiis quasi.
        </div>
      </div>
    </div>
  );
}

export default DiscussionCard;