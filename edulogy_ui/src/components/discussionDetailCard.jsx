import React, { useRef, useState, useEffect } from 'react';
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import axios from 'axios';
import { ImReply } from "react-icons/im";
import FbImageLibrary from 'react-fb-image-grid';

function DiscussionDetailCard({ discussion, type, refetch, handleReplyClick }) {
  const [upVoteClassName, setUpVoteClassName] = useState('up-vote');
  const [downVoteClassName, setDownVoteClassName] = useState('down-vote');

  const handleUpVote = () => {
    if (upVoteClassName.includes('disabled')) return;

    const config = {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    }

    axios.get(`https://fathomless-castle-76283.herokuapp.com/api/${type}/like/${discussion._id}`, config)
      .then(response => {
        console.log('da like', response.data);
        refetch();
      })
      .catch(error => console.log(error))
  }

  const handleDownVote = () => {
    if (downVoteClassName.includes('disabled')) return;

    console.log('down');
    const config = {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    }
  }

  const disableVote = () => {
    setUpVoteClassName(prevName => prevName + ' disabled');
    setDownVoteClassName(prevName => prevName + ' disabled');
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (discussion.like.includes(user._id)) {
        setUpVoteClassName(prevName => prevName + ' pressed');
        disableVote();
      }
    } else {
      disableVote();
    }
  }, [discussion.like]);

  return (
    <div className="discussion-detail-card">
      <div className="voting-area">
        <RiArrowUpSFill className={upVoteClassName} onClick={handleUpVote} />
        <div className="vote-counter">{discussion.like.length}</div>
        <RiArrowDownSFill className={downVoteClassName} onClick={handleDownVote} />
      </div>

      <div className="comment-content">
        {discussion.content}

        <div className="images-content">
          <FbImageLibrary
            images={discussion.imgs}
            hideOverlay
            countFrom={2}
          />
        </div>

        {type === 'problems' && <div className="reply">
          <ImReply className="reply-btn" onClick={handleReplyClick} />
        </div>}
      </div>

      <div className="author">
        <div className="author-avatar">{discussion.user.name.split(" ").pop().charAt(0)}</div>
        <div className="author-name">{discussion.user.name.split(" ").pop()}</div>
      </div>
    </div>
  );
}

export default DiscussionDetailCard;