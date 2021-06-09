import React from 'react';
import { Link } from 'react-router-dom';

function DiscussionCard({ discussion }) {
  return (
    <div className="discussion-card">
      <div className="author-and-replies">
        <div className="author-avatar">T</div>
        <div className="author-name">Tuấn</div>
        <div className="reply-quantity">{discussion.comments.length}</div>
        <div className="reply-quantity-suffix">trả lời</div>
      </div>

      <div className="content-detail">
        <Link to={`chi-tiet-thao-luan/${discussion._id}`} className="discussion-title">{discussion.title}</Link>
        <div className="discussion-content">
          {discussion.content}
        </div>
      </div>
    </div>
  );
}

export default DiscussionCard;