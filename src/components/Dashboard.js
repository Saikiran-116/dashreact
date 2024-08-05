import React from 'react';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css';
import { FaCartPlus, FaShippingFast,  FaTimesCircle, FaDonate,FaBullseye, FaHamburger, FaUtensils, FaAngleRight } from 'react-icons/fa';

const Dashboard = () => {
  const percentage = 70;

  return (
    <div className="dashboard">
      <h3 class="gash">Dashboard</h3>
      <div className="main-content">
        
        <div className="left-column">
          <div className="stats-row">
            <div className="stat-card">
            <div className="icon-container" style={{ backgroundColor: '#667dff5e' }}>
            <FaCartPlus  style={{ color: '#667dff', fontSize: '24px' }} />
         
              </div>
         
              
              <p>Total Orders</p>
              <h3>75</h3>
              <span className="stat-change positive">3%</span>
            </div>
            <div className="stat-card">
            <div className="icon-container" style={{ backgroundColor: '#00cd8f4d' }}>
            <FaShippingFast style={{ color: '#00cd8f', fontSize: '24px' }} />
         
              </div>
              <p>Total Delivered</p>
              <h3>70</h3>
              <span className="stat-change negative">-3%</span>
            </div>
            <div className="stat-card">
            <div className="icon-container" style={{ backgroundColor: '#fe808142' }}>
            <FaTimesCircle  style={{ color: '#fe8081', fontSize: '24px' }} />
         
              </div>
              <p>Total Cancelled</p>
              <h3>5</h3>
              <span className="stat-change positive">3%</span>
            </div>
            <div className="stat-card">
            <div className="icon-container" style={{ backgroundColor: '#e753a940' }}>
            <FaDonate   style={{ color: '#e753a9', fontSize: '24px' }} />
         
              </div>
              <p>Total Revenue</p>
              <h3>$12k</h3>
              <span className="stat-change negative">-3%</span>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="stat-card1">
            <p>Net Profit</p>
            <h3>$6759.25</h3>
            <span className="stat-change1 positive1">3%</span>
            <div className="progress-container">
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: '#7298fd',
                  trailColor: '#262e5d',
                })}
              />
              <div className="progress-text">
                <span className="percentage-text">{`${percentage}%`}</span><br></br>
                <span className="goal-text">Goal Completed</span>
              </div>
              
            </div>
            <span className="rounded-text">*The values here have been rounded off</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="left-column">
          <ActivityChart />
          <RecentOrders />
        </div>
        <div className="right-column">
          <div className="side-cards">
            <div className="side-card">
              <div className="side-card-content">
                <div className="icon-circle1 goals-icon-circle">
                  <FaBullseye className="side-card-icon goals-icon" style={{ color: '#ec6827', fontSize: '30px' }} />
                </div>
                <h3 className="side-card-text">Goals</h3>
                <div className="icon-circle2">
               <a href="">
                <FaAngleRight className="side-card-arrow" /></a></div>
              </div>
            </div>
            <div className="side-card">
              <div className="side-card-content">
                <div className="icon-circle1 popular-dishes-icon-circle">
                  <FaHamburger className="side-card-icon popular-dishes-icon" style={{ color: '#7990ff', fontSize: '30px' }} />
                </div>
                <h3 className="side-card-text">Popular Dishes</h3>
                <div className="icon-circle2">
               <a href="">
                <FaAngleRight className="side-card-arrow" /></a></div>
              </div>
            </div>
            <div className="side-card">
              <div className="side-card-content">
                <div className="icon-circle1 menus-icon-circle">
                  <FaUtensils className="side-card-icon menus-icon" style={{ color: '#2499ce', fontSize: '30px' }} />
                </div>
                <h3 className="side-card-text">Menus</h3>
                <div className="icon-circle2">
               <a href=""> <FaAngleRight className="side-card-arrow" /></a></div>
              </div>
            </div>
          </div>
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
