import React from 'react';
import mentorsData from '@site/src/data/mentors.json';
import styles from "./styles.module.css";

const MentorCard = ({ mentor, isDarkMode }) => {
  const cardStyle = isDarkMode ? styles.darkMode : styles.lightMode;

  return (
    <div className={`${styles.mentorCard} ${cardStyle}`}>
      <img src={mentor.imageUrl} alt={`Picture of ${mentor.name}`} className={styles.mentorImage} />
      <h3 className={styles.mentorName}>{mentor.name}</h3>
      <p className={styles.mentorLocation}>📍 {mentor.location}</p>
      <br/>
      <p className={styles.mentorExpertise}>💼 {mentor.expertise.join(', ')}</p>
      <p className={styles.mentorAvailability}>🕒 {mentor.availability}</p>
      <p className={styles.mentorContact}>💬 {mentor.contact}</p>
      <p className={styles.mentorBio}>{mentor.bio}</p>
      <a href={mentor.profileUrl} className={styles.mentorProfileLink} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

const MentorList = () => {
  // Assuming you have a way to determine the current theme mode (dark/light)
  const isDarkMode = true; // You need to replace this with your actual logic to determine the theme mode

  return (
    <div className={styles.mentorGrid}>
      {mentorsData.map((mentor, index) => (
        <MentorCard key={index} mentor={mentor} isDarkMode={isDarkMode} />
      ))}
    </div>
  );  
};

export default MentorList;
