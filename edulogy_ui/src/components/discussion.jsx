import React from 'react';
import DiscussionDetailCard from './discussionDetailCard';
import DiscussionForm from './discussionForm';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BoxLoading } from 'react-loadingg';

function Discussion() {
  const { id } = useParams();

  const { data: problem, isLoading, isError } = useQuery('discussion', async () => {
    const response = await axios.get(`https://fathomless-castle-76283.herokuapp.com/api/problems/${id}`);
    console.log(response.data)
    return response.data;
  });

  return (
    <div className="discussion">
      <div className="section-wrapper">
        <DiscussionForm />

        <div className="discussions-area">
          {isLoading && <BoxLoading color='#00949e' />}
          {isError && <div style={{ lineHeight: '50vh', textAlign: 'center' }}>Something went wrong</div>}
          {problem && <div className="discussions-wrapper">
            <h3 className="title">{problem.doc.title}</h3>
            <DiscussionDetailCard discussion={problem.doc} />

            <div className="replies-quantity">{problem.doc.comments.length} câu trả lời</div>

            {problem.doc.comments.map(comment => (
              <DiscussionDetailCard discussion={comment} />
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Discussion;