import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profiles from './Profiles';
import { Navbar } from './Navbar';
import './Scoreboard.css';

export const Scoreboard = () => {
  const [period, setPeriod] = useState(0);
  const navigate = useNavigate();


  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  }
  
  const Leaderboard = [
    {
        name: "Shawn Hanna",
        location: "India",
        score : 1550,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2023-10-20"
    },
    {
        name: "Fidel Hand",
        location: "USA",
        score : 2310,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2023-10-20"
    },
    {
        name: "Bessie Hickle",
        location: "Chaina",
        score : 350,
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2023-10-20"
    },
    {
        name: "Adella Wunsch",
        location: "Japan",
        score : 2100,
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2023-10-20"
    },
    {
        name: "Clair O'Connell",
        location: "London",
        score : 1250,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2023-10-20"
    },
    {
        name: "Kameron Prosacco",
        location: "Canada",
        score : 5250,
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2023-10-20"
    }
]

return (
  <div> 
    <Navbar />
    <div className="board">
      <h1 className='leaderboard'>WinZone Ranking</h1>
      <Profiles Leaderboard={between(Leaderboard, parseInt(period))} />
    </div>
  </div>
);
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter(val => {
    let userDate = new Date(val.dt);
    if (between === 0) return true;
    return previous <= userDate && today >= userDate;
  });

  
  return filter.sort((a, b) => b.score - a.score);
}

export default Scoreboard;
