import React, { useRef } from 'react';
import { IoPersonCircle } from "react-icons/io5";

const contributions = [
  {
    id: 1,
    title: 'Câu điều kiện loại 1',
    status: 'Đang chờ duyệt' // 0 - đang chờ duyệt/ 1 - Đã duyệt / 2 - Từ chối
  },
  {
    id: 2,
    title: 'Mệnh đề Wish',
    status: 'Đã duyệt'
  },
  {
    id: 3,
    title: 'Câu điều kiện loại 2',
    status: 'Từ chối'
  },
  {
    id: 4,
    title: 'Câu tường thuật',
    status: 'Đã duyệt'
  },
  {
    id: 5,
    title: 'Câu điều kiện loại 3',
    status: 'Đang chờ duyệt'
  },
  {
    id: 6,
    title: 'Sự hòa hợp của chủ ngữ và vị ngữ',
    status: 'Đang chờ duyệt'
  },
  {
    id: 7,
    title: 'Câu bị động',
    status: 'Từ chối'
  },
  {
    id: 8,
    title: 'Đại từ quan hệ',
    status: 'Đã duyệt'
  },
  {
    id: 9,
    title: 'Giới từ',
    status: 'Đang chờ duyệt'
  },
  {
    id: 10,
    title: 'Cụm động từ',
    status: 'Đã duyệt'
  },
  {
    id: 11,
    title: 'Đại từ quan hệ',
    status: 'Đã duyệt'
  },
  {
    id: 12,
    title: 'Giới từ',
    status: 'Đang chờ duyệt'
  },
  {
    id: 13,
    title: 'Cụm động từ',
    status: 'Đã duyệt'
  },
];

// const closeAccountSidebar = () => {
//   document.querySelector('.account-info-sidebar').classList.remove('active');
//   document.querySelector('.account-info-sidebar .sidebar .test-history').classList.remove('active');
//   document.querySelector('.account-info-sidebar .sidebar .contribution-history').classList.remove('active');
// }

// const openContributionHistory = () => {
//   document.querySelector('.account-info-sidebar .sidebar .contribution-history').classList.add('active');
// }

function AccInfoSidebar() {
  const accountSidebarRef = useRef(null);
  const contributionHistoryRef = useRef(null);
  const testHistoryRef = useRef(null);

  const closeAccountSidebar = () => {
    accountSidebarRef.current.classList.remove('active');
    testHistoryRef.current.classList.remove('active');
    contributionHistoryRef.current.classList.remove('active');
  }

  const openContributionHistory = () => {
    contributionHistoryRef.current.classList.add('active');
  }

  return (
    <div className="account-info-sidebar" ref={accountSidebarRef}>
      <div className="overlay" onClick={closeAccountSidebar}></div>

      <div className="sidebar">
        <IoPersonCircle className="icon" />

        <div className="user-info">
          <div className="user-name">Phạm Hoàng Phượng Trinh</div>
          <div className="user-email">petrinhtrinh182@gmail.com</div>
        </div>

        <ul className="options">
          <li className="test-history-btn">Lịch sử làm bài</li>
          <li className="contribution-history-btn" onClick={openContributionHistory}>Lịch sử đóng góp</li>
          <li className="log-out-btn">Đăng xuất</li>
        </ul>

        <div className="test-history" ref={testHistoryRef}>
          
        </div>

        <div className="contribution-history" ref={contributionHistoryRef}>
          {contributions.map(contribution => (
            <div className="contribution-card" key={contribution.id}>
              <div className="title">{contribution.title}</div>
              <div className="status">{contribution.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccInfoSidebar;