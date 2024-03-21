// VictimCard.jsx
import React from 'react';

const VictimCard = ({ victimCase }) => {
  const { typeOfAbuse, location, storyText, mediaEvidence } = victimCase;

  return (
    <div className="card">
      <h2>Type of Abuse: {typeOfAbuse}</h2>
      <p>Location: {location}</p>
      <p>Story Text: {storyText}</p>
      {mediaEvidence.map((evidence) => (
        <p key={evidence}>Media Evidence: {evidence}</p>
      ))}
    </div>
  );
};

export default VictimCard;
