import React, { useState } from 'react';

const WitnessCaseCard = ({ caseData }) => {
  const { _id, victimName, abuserName, location, typeOfAbuse, urgency, backgroundStory, mediaEvidence } = caseData;

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
        <p><strong>Victim Name:</strong> {victimName}</p>
        <p><strong>Abuser Name:</strong> {abuserName}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Type of Abuse:</strong> {typeOfAbuse}</p>
        <p><strong>Urgency:</strong> {urgency}</p>
        <p><strong>Background Story:</strong> {backgroundStory}</p>
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

const WitnessCasesList = ({ witnessCases }) => {
  return (
    <div className="witness-cases-list">
      {witnessCases.map(witnessCase => (
        <WitnessCaseCard key={witnessCase._id} caseData={witnessCase} />
      ))}
    </div>
  );
};

export default WitnessCasesList;
