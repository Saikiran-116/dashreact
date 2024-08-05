import React from 'react';
import './RecentOrders.css';

const orders = [
  { name: 'Wade Warren', imageUrl: 'wade-warren.jpg', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { name: 'Jane Cooper', imageUrl: 'jane-coper.jpg', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
  { name: 'Guy Hawkins', imageUrl: 'guyhawikin.jpg', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
  { name: 'Kristin Watson', imageUrl: 'kristin.jpg', orderNo: '20965732', amount: '$60.00', status: 'Pending' },
  { name: 'Cody Fisher', imageUrl: 'cody.jpg', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { name: 'Savannah Nguyen', imageUrl: 'savann.jpg', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const RecentOrders = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'delivered';
      case 'Cancelled':
        return 'cancelled';
      case 'Pending':
        return 'pending';
      default:
        return '';
    }
  };

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <img src={order.imageUrl} alt={order.name} className="customer-image" />
                {order.name}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`status ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
