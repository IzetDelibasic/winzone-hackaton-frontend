import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Dodali smo Link
import './Achievements.css';

export const Achievements = () => {
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'Achievement 1', completed: false },
    { id: 2, name: 'Achievement 2', completed: true },
    { id: 3, name: 'Achievement 3', completed: false },
  ]);

  const collectAchievement = (id) => {
    setAchievements((prevAchievements) =>
      prevAchievements.map((achievement) =>
        achievement.id === id ? { ...achievement, completed: true } : achievement
      )
    );
  };

  return (
    <div className="container-achievements">
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement.id}>
              <div className="achievement">
                <div className="ach1" alt={`Logo za ${achievement.name}`} />
                <div className="achievement-details">
                  <h3>{achievement.name}</h3>
                  <div className="progress-bar">
                    <div className={`progress ${achievement.completed ? 'completed' : ''}`}>
                      {achievement.completed ? 'Completed' : '0/1'}
                    </div>
                  </div>
                  {achievement.completed ? (
                    <button disabled>Collected</button>
                  ) : (
                    <button onClick={() => collectAchievement(achievement.id)}>
                      Collect
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nickname">
        <div className="container">
          <div className="box">
            <div className="image">
              
            </div>
            <div className="name_job">Izet Delibasic</div>
            <div className="rating">
              
            </div>
            <div className="btns">
              <Link to="/"> 
                <button>Sign Out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
