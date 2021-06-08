import React from 'react';
import DiscussionCard from './discussionCard';
import DiscussionForm from './discussionForm';

function AllDiscussions() {
  return (
    <div className="all-discussions">
      <div className="section-wrapper">
        <DiscussionForm />

        <div className="all-discussions-area">
          <div className="all-discussions-wrapper">
            <h2 className="title">Tất cả câu hỏi</h2>
            <div className="discussions-quantity">142 câu hỏi</div>

            <div className="divider"></div>

            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllDiscussions
