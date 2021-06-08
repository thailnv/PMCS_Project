import React from 'react';
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

function DiscussionDetailCard({ discussion }) {
  return (
    <div className="discussion-detail-card">
      <div className="voting-area">
        <RiArrowUpSFill className="up-vote" />
        <div className="vote-counter">24</div>
        <RiArrowDownSFill className="down-vote" />
      </div>

      <div className="comment-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio deserunt non, sit, dignissimos fuga fugiat id nobis similique eum vero quas inventore, quasi explicabo adipisci error est tenetur expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>

      <div className="author">
        <div className="author-avatar">T</div>
        <div className="author-name">Tuấn</div>
      </div>
    </div>
  );
}

export default DiscussionDetailCard;