import React from 'react';
import DiscussionDetailCard from './discussionDetailCard';
import DiscussionForm from './discussionForm';

function Discussion() {
  return (
    <div className="discussion">
      <div className="section-wrapper">
        <DiscussionForm />

        <div className="discussions-area">
          <div className="discussions-wrapper">
            <h3 className="title">Phân biệt Most of... và Almost</h3>
            <DiscussionDetailCard />

            <div className="replies-quantity">4 câu trả lời</div>

            <DiscussionDetailCard />
            <DiscussionDetailCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discussion;