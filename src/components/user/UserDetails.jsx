import React from 'react';
import './UserDetails.css'; // Import the specific CSS file for UserDetails

export default function UserDetails(props) {
  return (
    <div className="user-details">
      <p className="name">Greetings {props.fullName}</p>

      <ul className="details-list">
        <li className="detail"> {props.email}</li>
      </ul>
    </div>
  );
}
