import React from 'react';
import mentorsData from '../data/mentors.json'; // Fixed path for JSON data
import '../css/mentorcard.css'; // Fixed path for CSS file

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <img src={mentor.imageUrl} alt={`Picture of ${mentor.name}`} className="mentor-image" />
      <h3 className="mentor-name">{mentor.name}</h3>
      <p className="mentor-location">📍 {mentor.location}</p>
      <br/>
      <p className="mentor-expertise">💼 {mentor.expertise.join(', ')}</p> {/* Join the array of expertise into a string */}
      <p className="mentor-availability">🕒 {mentor.availability}</p>
      <p className="mentor-slack-contact">💬 {mentor.contact}</p>
      <p className="mentor-bio">{mentor.bio}</p>
      <a href={mentor.profileUrl} className="mentor-profile-link" target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

const MentorListPage = () => {
  return (
    <div className="mentor-grid">
      {mentorsData.map((mentor, index) => (
        <MentorCard key={index} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorListPage;
