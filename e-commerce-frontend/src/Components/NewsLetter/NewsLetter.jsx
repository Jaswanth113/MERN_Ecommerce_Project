import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      {isSubscribed ? (
        <p>Thank you for subscribing to our newsletter!</p>
      ) : (
        <div>
          <input
            type="email"
            placeholder='Your email id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Subscribe</button>
        </div>
      )}
    </div>
  );
};

export default NewsLetter;

