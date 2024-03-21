import React, { useState } from 'react';

const VictimCaseCard = ({ caseData }) => {
  const { _id, userName, typeOfAbuse, location, storyText, storyVideo, storyAudio, mediaEvidence } = caseData;

  const [showModal, setShowModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleOpenModal = (media) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
    setShowModal(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5>Case ID: {_id}</h5>
      </div>
      <div className="card-body">
        <p><strong>User Name:</strong> {userName}</p>
        <p><strong>Type of Abuse:</strong> {typeOfAbuse}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Story:</strong> {storyText}</p>
        {storyVideo && (
          <p><strong>Story Video:</strong> <a href={storyVideo} target="_blank" rel="noopener noreferrer">Watch Video</a></p>
        )}
        {storyAudio && (
          <p><strong>Story Audio:</strong> <a href={storyAudio} target="_blank" rel="noopener noreferrer">Listen Audio</a></p>
        )}
        <p><strong>Media Evidence:</strong></p>
        <ul>
          {mediaEvidence.map((evidence, index) => (
            <li key={index}>
              {evidence}
              <button onClick={() => handleOpenModal(evidence)}>Open Evidence File</button>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {selectedMedia && (
              <div>
                {selectedMedia.includes('.mp4') ? (
                  <video controls>
                    <source src={selectedMedia} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : selectedMedia.includes('.mp3') ? (
                  <audio controls>
                    <source src={selectedMedia} type="audio/mp3" />
                    Your browser does not support the audio tag.
                  </audio>
                ) : (
                  <iframe src={selectedMedia} title="Document Viewer" width="100%" height="400"></iframe>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const VictimCasesList = ({ victimCases }) => {
  return (
    <div className="victim-cases-list">
      {victimCases.map(victimCase => (
        <VictimCaseCard key={victimCase._id} caseData={victimCase} />
      ))}
    </div>
  );
};

export default VictimCasesList;
