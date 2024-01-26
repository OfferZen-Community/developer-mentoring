import React from 'react';
import mentorsData from '@site/src/data/mentors.json'; // Fixed path for JSON data
import styles from "./styles.module.css"; // Fixed path for CSS file

const MentorCard = ({ mentor }) => {
  return (
    <div className={styles.mentorCard}>
      <img src={mentor.imageUrl} alt={`Picture of ${mentor.name}`} className={styles.mentorImage} />
      <h3 className={styles.mentorName}>{mentor.name}</h3>
      <p className={styles.mentorLocation}>📍 {mentor.location}</p>
      <br/>
      <p className={styles.mentorExpertise}>💼 {mentor.expertise.join(', ')}</p> {/* Join the array of expertise into a string */}
      <p className={styles.mentorAvailability}>🕒 {mentor.availability}</p>
      <p className={styles.mentorContact}>💬 {mentor.contact}</p>
      <p className={styles.mentorBio}>{mentor.bio}</p>
      <a href={mentor.profileUrl} className={styles.mentorProfileLink} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

const MentorList = () => {
  return (
    <div className={styles.mentorGrid}>
      {mentorsData.map((mentor, index) => (
        <MentorCard key={index} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorList;
