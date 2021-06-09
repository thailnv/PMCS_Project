import React from 'react';
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

function DiscussionDetailCard({ discussion }) {
  return (
    <div className="discussion-detail-card">
      <div className="voting-area">
        <RiArrowUpSFill className="up-vote" />
        <div className="vote-counter">{discussion.like}</div>
        <RiArrowDownSFill className="down-vote" />
      </div>

      <div className="comment-content">
        {discussion.content}
      </div>

      <div className="author">
        <div className="author-avatar">T</div>
        <div className="author-name">Tuấn</div>
      </div>
    </div>
  );
}

export default DiscussionDetailCard;