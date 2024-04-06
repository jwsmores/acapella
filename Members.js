// Members.js

import React from 'react';

const Members = () => {
  const membersData = [
    { name: 'Member 1', role: 'Lead Singer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Member 2', role: 'Bass', bio: 'Pellentesque euismod libero nec ultrices.' },
    // Add more member data as needed
  ];

  return (
    <div>
      <h1>Members</h1>
      <div className="members-list">
        {membersData.map((member, index) => (
          <div key={index} className="member-item">
            <img src={`https://placehold.it/150x150?text=${member.name}`} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
