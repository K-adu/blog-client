import React from 'react';
import './UserDetails.css'; // Import the specific CSS file for UserDetails

export default function UserDetails() {
  return (
    <div className="user-details">
      <p className="name">your name will display here</p>

      <ul className="details-list">
        <li className="detail">the workplave here</li>
        <li className="detail">work title</li>
      </ul>
    </div>
  );
}
