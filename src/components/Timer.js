import { useState, useEffect, useRef } from "react";

const WORK_TIME = 3000; 
const WATCH_TIME = 1500; 

function Timer({ setBackgroundImage, images }) {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME); 

  const [isActive, setIsActive] = useState(false); 

  const [mode, setMode] = useState('work'); 

  const intervalRef = useRef(null); 

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (isActive) {

      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {

      clearInterval(intervalRef.current);
    }


    return () => clearInterval(intervalRef.current);
  }, [isActive]);


  const toggleTimer = () => {
    if (isActive) {

        setIsActive(false);
    } else {

        if (timeLeft === 0) {
            const newTime = mode === 'work' ? WORK_TIME : WATCH_TIME;
            setTimeLeft(newTime);
        }
        setIsActive(true);
    }
  };


  const resetCounter = () => {
    clearInterval(intervalRef.current);
    const newTime = mode === 'work' ? WORK_TIME : WATCH_TIME;
    setTimeLeft(newTime);
    setIsActive(false);
  };


  const changeMode = (newMode) => {

    const newTime = newMode === 'work' ? WORK_TIME : WATCH_TIME;
    
    setMode(newMode); 
    setTimeLeft(newTime); 
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  function gearFunc() {
    const pasive = document.querySelector('.pasive');
    pasive.classList.toggle('active');
  }


  return (
    <div className="main-card">
      <h2 className="header">animedoro</h2>
      <div className="buttons">
        <button 
          id="work" 
          className={`btn ${mode === 'work' ? 'active-mode' : ''}`} 
          onClick={() => changeMode('work')}>
          <i className="bi bi-book"></i>Work
        </button>
        <button 
          id="watch" 
          className={`btn ${mode === 'watch' ? 'active-mode' : ''}`} 
          onClick={() => changeMode('watch')}>
          <i className="bi bi-tv"></i>Watch
        </button>
      </div>
      <span className="counter">{formatTime(timeLeft)}</span>
      <div className="maintance">
        <button className="start" onClick={toggleTimer}>
          {isActive ? 'Pause' : (timeLeft === (mode === 'work' ? WORK_TIME : WATCH_TIME) && !isActive ? 'Start' : 'Resume')}
        </button>
        <span className="turn" onClick={resetCounter}><i className="bi bi-arrow-clockwise"></i></span>
        <span className="gear" onClick={gearFunc}><i className="bi bi-gear"></i></span>
        <div className="pasive">
          <ul className="list">
            {images.map((img, i) => (
              <li className="item" key={i}>
                <img src={img.src} alt={img.alt} onClick={() => setBackgroundImage(img.src)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timer;