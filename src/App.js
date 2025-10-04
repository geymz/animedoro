import myNeighborTotoro from './assets/myNeighborTotoro.png';
import onlyYesterday from './assets/onlyYesterday.png';
import porcoRosso from './assets/porcoRosso.png';
import princessMononoke from './assets/princessMononoke.jpg';
import spiritedAway from './assets/spiritedAway.jpg';
import theBoyAndTheHeron from './assets/theBoyAndTheHeron.png';

import 'react-calendar/dist/Calendar.css'; 

import { useState } from "react";
import './sass/style.css';

import Timer from './components/Timer';
import Spotify from './components/Spotify';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(spiritedAway);
  const [showTodo, setShowTodo] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const images = [
    { src: spiritedAway, alt: "Spirited Away" },
    { src: theBoyAndTheHeron, alt: "The Boy And The Heron" },
    { src: onlyYesterday, alt: "Only Yesterday" },
    { src: princessMononoke, alt: "Princess Mononoke" },
    { src: myNeighborTotoro, alt: "My Neighbor Totoro" },
    { src: porcoRosso, alt: "Porco Rosso" }
  ];

  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="overlay"></div>

      <div className="control-icons">
        <button className="icon-toggle todo-toggle" onClick={() => setShowTodo(prev => !prev)} title="Toggle Todo List">
          <i className="bi bi-list-task"></i>
        </button>
        <button className="icon-toggle calendar-toggle" onClick={() => setShowCalendar(prev => !prev)} title="Toggle Calendar">
          <i className="bi bi-calendar-event"></i>
        </button>
      </div>
      
      {showCalendar && <Calendar />}
      {showTodo && <TodoList />}

      <div className="all-card">
        <Timer setBackgroundImage={setBackgroundImage} images={images} />
        <Spotify />
      </div>
    </>
  );
}

export default App;