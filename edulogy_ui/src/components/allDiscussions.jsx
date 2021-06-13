import React, { useState, useEffect } from 'react';
import DiscussionCard from './discussionCard';
import DiscussionForm from './discussionForm';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BoxLoading } from 'react-loadingg';
import ReactPaginate from "react-paginate";

function AllDiscussions() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading, isError, refetch } = useQuery(['discussions', page], async () => {
    const response = await axios.get(`https://fathomless-castle-76283.herokuapp.com/api/problems?page=${page + 1}&pageSize=3`);
    setTotalPages(response.data.totalPage);
    return response.data;
  });

  const handlePageChange = ({ selected }) => {
    setPage(selected);
  }

  return (
    <div className="all-discussions">
      <div className="section-wrapper">
        <DiscussionForm refetch={refetch} />

        <div className="all-discussions-area">
          {isLoading && <BoxLoading color='#00949e' />}
          {isError && <div style={{ lineHeight: '50vh', textAlign: 'center' }}>Something went wrong</div>}
          {data && <div className="all-discussions-wrapper">
            <h2 className="title">Tất cả chủ đề</h2>
            <div className="discussions-quantity">{data.totalProblem} chủ đề</div>

            <div className="divider"></div>

            {data.doc.map(discussion => (
              <DiscussionCard discussion={discussion} />
            ))}

            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={totalPages}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              pageClassName={"paginated-btn"}
              breakClassName={"paginated-btn"}
              previousClassName={"prev-btn"}
              nextClassName={"next-btn"}
              disabledClassName={"disabled-btn"}
              activeClassName={"active-btn"}
              forcePage={page}
            />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default AllDiscussions
