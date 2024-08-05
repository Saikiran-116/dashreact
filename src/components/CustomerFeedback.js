import React from 'react';
import './CustomerFeedback.css';

const feedback = [
  {
    name: 'Jenny Wilson',
    rating: 4,
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger and greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    image: 'jenny.jpg',
  },
  {
    name: 'Dianne Russell',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
    image: 'devon.jpg',
  },
  {
    name: 'Devon Lane',
    rating: 4,
    comment: 'Normally wings are wings, but theirs are lean meaty and tender, and the sauce is a perfect balance of sweet and spicy.',
    image: 'russell.jpg',
  },
];

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      <div className="feedback-list">
        {feedback.map((fb, index) => (
          <div className="feedback" key={index}>
            <div className="profile">
              <img src={fb.image} alt={fb.name} className="profile-image" />
              <h4>{fb.name}</h4>
            </div>
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="star">
                  {i < fb.rating ? '★' : '☆'}
                </span>
              ))}
            </div>
            <p>{fb.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
