import myNeighborTotoro from './assets/myNeighborTotoro.png';
import onlyYesterday from './assets/onlyYesterday.png';
import porcoRosso from './assets/porcoRosso.png';
import princessMononoke from './assets/princessMononoke.jpg';
import spiritedAway from './assets/spiritedAway.jpg';
import theBoyAndTheHeron from './assets/theBoyAndTheHeron.png';

import {useState} from "react";
import './sass/style.css';

function App() {

  let [backgroundImage, setBackgroundImage] = useState(spiritedAway);
  // const [clicked, setClicked] = useState(false);

  let timeLeft = 3000;
  let interval;

  function startCountdown() {
    const counter = document.querySelector('.counter');

    interval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      counter.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      timeLeft--;

      if (timeLeft <= 0) {
        clearInterval(interval);
        counter.innerHTML = "00:00";
      }
    }, 1000);
  }

  function clickWork() {
    const counter = document.querySelector('.counter');
    const workBtn = document.getElementById('work');
    const watchBtn = document.getElementById('watch');
    workBtn.style.backgroundColor = "white";
    workBtn.style.color = "black";
    watchBtn.style.backgroundColor = "transparent";
    watchBtn.style.color = "white";
    counter.innerHTML = "50:00";
    timeLeft = 3000;
    restartCountdown();
    clearInterval(interval);
  }

  function clickWatch() {
    const counter = document.querySelector('.counter');
    const workBtn = document.getElementById('work');
    const watchBtn = document.getElementById('watch');
    watchBtn.style.backgroundColor = "white";
    watchBtn.style.color = "black";
    workBtn.style.backgroundColor = "transparent";
    workBtn.style.color = "white";
    counter.innerHTML = "25:00";
    timeLeft = 1500;
    restartCountdown();
    clearInterval(interval);
  }

  function restartCountdown() {
    clearInterval(interval);
    startCountdown();
    // setClicked(true);
  }

  function resetCounter() {
    let counter = document.querySelector('.counter');
    let workBtn = document.getElementById('work');
    let watchBtn = document.getElementById('watch');

    // const turn = document.querySelector('.turn');
    // turn.style.transform = "rotate(360deg)";
    // turn.style.transition = ".3s ease all";

    if (workBtn.style.backgroundColor === "white" && watchBtn.style.backgroundColor === "transparent") {
      counter.innerHTML = "50:00";
      timeLeft = 3000;
    } else {
      counter.innerHTML = "25:00";
      timeLeft = 1500;
    }

    if (interval) {
      clearInterval(interval);
      startCountdown();
    }

    if (timeLeft > 0) {
      clearInterval(interval);
      startCountdown();
    }

  }

  function gearFunc() {
    const pasive = document.querySelector('.pasive');
    pasive.classList.toggle('active');

    // const gear = document.querySelector('.gear');
  }

  const clickImg = (imageUrl) => {
    setBackgroundImage(imageUrl);
    console.log(imageUrl);
  };

  function spotiSlay() {
    const spot = document.querySelector('.resp-frame');
    const spotI = document.querySelector('.show-spotify-button i');

    if (spot.style.display === "none") {
      spot.style.display = "flex";
      spot.style.visibility = "visible";
      spotI.style.borderLeft = "2px solid rgb(30,216,96)";
      spotI.style.borderBottom = "2px solid rgb(30,216,96)";
      spotI.style.borderRight = "none";
      spotI.style.borderTop = "none";

    } else {
      spot.style.display = "none";
      spot.style.visibility = "hidden";
      spotI.style.borderRight = "2px solid rgb(30,216,96)";
      spotI.style.borderTop = "2px solid rgb(30,216,96)";
      spotI.style.borderLeft = "none";
      spotI.style.borderBottom = "none";
    }
  }



  return (
      <>
        <div className="background" style={{backgroundImage: `url(${backgroundImage})`}}></div>
        <div className="overlay"></div>
        <button onClick={spotiSlay} className="show-spotify-button"><i className="bi bi-spotify"></i></button>
        <div className="all-card">
          <div className="main-card">
            <h2 className="header">animedoro</h2>
            <div className="buttons">
              <button id="work" className="btn" onClick={clickWork}><i className="bi bi-book"></i>Work</button>
              <button id="watch" className="btn" onClick={clickWatch}><i className="bi bi-tv"></i>Watch</button>
            </div>
            <span className="counter">50:00</span>
            <div className="maintance">
              <button className="start" onClick={restartCountdown}>Start</button>
              <span className="turn" onClick={resetCounter}><i className="bi bi-arrow-clockwise"></i></span>
              <span className="gear" onClick={gearFunc}><i className="bi bi-gear"></i></span>
              <div className="pasive">
                <ul className="list">
                  <li className="item">
                    <img alt="Spirited Away" src={spiritedAway} onClick={() => clickImg(spiritedAway)}/>
                  </li>
                  <li className="item">
                    <img alt="The Boy And The Heron" src={theBoyAndTheHeron}
                         onClick={() => clickImg(theBoyAndTheHeron)}/>
                  </li>
                  <li className="item">
                    <img alt="Only Yesterday" src={onlyYesterday} onClick={() => clickImg(onlyYesterday)}/>
                  </li>
                  <li className="item">
                    <img alt="Princess Mononoke" src={princessMononoke} onClick={() => clickImg(princessMononoke)}/>
                  </li>
                  <li className="item">
                    <img alt="My Neighbor Totoro" src={myNeighborTotoro} onClick={() => clickImg(myNeighborTotoro)}/>
                  </li>
                  <li className="item">
                    <img alt="Porco Rosso" src={porcoRosso} onClick={() => clickImg(porcoRosso)}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="spotify">
            <iframe className="regu-frame" title="iframe-regu"
                    src="https://open.spotify.com/embed/playlist/4gf0brlPTjLxd7rxQXVMVW?utm_source=generator&theme=0"
                    width="300" height="352" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
            </iframe>

            <iframe className="resp-frame" title="iframe-resp"
                    src="https://open.spotify.com/embed/playlist/4gf0brlPTjLxd7rxQXVMVW?utm_source=generator&theme=0"
                    width="100%" height="82" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
            </iframe>

          </div>
        </div>
      </>
  );
}

export default App;
