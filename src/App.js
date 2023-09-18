import React, { useState, useEffect } from 'react';


const App = () => {
  const [person, setPerson] = useState({
    firstName: 'SALIM',
    bio: 'Web Developer | Tech Enthusiast',
    imgSrc: 'img/gomycode.jpg',
    profession: 'Web Developer',
  });

  const [show, setShow] = useState(true);

  const [countdown, setCountdown] = useState(60);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    let intervalId;

    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  return (
      <div style={{ backgroundColor: 'lightblue', padding: '20px', border: '1px solid #ccc', textAlign: 'center', }} className="div">
        <button
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }}
          onClick={toggleShow}
        >
          Toggle Profile
        </button>
    
        {show && (
          <div>
            <h2>{person.firstName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" style={{
              maxWidth: '100%',
              borderRadius: '50%', 
              width: '150px', 
              height: '150px', 
            }} />
            <p style={{ fontWeight: 'bold' }}>Profession: {person.profession}</p>
          </div>
        )}
    
        <p>Countdown: {countdown} seconds</p>
      </div>
    );
    
};

export default App;





