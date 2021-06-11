import React, { useState, useEffect } from 'react';
import DiscussionCard from './discussionCard';
import DiscussionForm from './discussionForm';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BoxLoading } from 'react-loadingg';

function AllDiscussions() {
  const [page, setPage] = useState(1);
  const [discussions, setDiscussions] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading, isError, refetch } = useQuery(['discussions'], async () => {
    const response = await axios.get(`https://fathomless-castle-76283.herokuapp.com/api/problems`);
    return response.data;
  });

  useEffect(() => {
    if (data) {
      console.log(data)
      // setTotalPages(data.totalPages);
      // setDiscussions(data.products);
    }
  }, [data]);

  return (
    <div className="all-discussions">
      <div className="section-wrapper">
        <DiscussionForm refetch={refetch} />

        <div className="all-discussions-area">
          {isLoading && <BoxLoading color='#00949e' />}
          {isError && <div style={{ lineHeight: '50vh', textAlign: 'center'}}>Something went wrong</div>}
          {data && <div className="all-discussions-wrapper">
            <h2 className="title">Tất cả câu hỏi</h2>
            <div className="discussions-quantity">142 câu hỏi</div>

            <div className="divider"></div>

            {[...data.doc].reverse().map(discussion => (
              <DiscussionCard discussion={discussion} />
            ))}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default AllDiscussions
