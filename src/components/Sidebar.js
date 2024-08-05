import React from 'react';
import { FaHome, FaChartBar, FaNotesMedical, FaWallet, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><FaHome className='icon active' style={{ color: '#667dff', fontSize: '24px' }}/> </li>
          <li><FaChartBar  className='icon'/></li>
          <li><FaNotesMedical className='icon' /></li>
          <li><FaWallet  className='icon'/></li>
          <li><FaShoppingBag  className='icon'/></li>
         
        </ul>
      </nav>
      <div className="logout">
        <FaSignOutAlt className="icon" />
      </div>
    </aside>
  );
};

export default Sidebar;
