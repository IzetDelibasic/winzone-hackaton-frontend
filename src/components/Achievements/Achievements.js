import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';

export const Achievements = () => {
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'First login', completed: false },
    { id: 2, name: 'Login two times in one hour', completed: false },
    { id: 3, name: 'First deposit', completed: false },
  ]);

  const [collectedAchievements, setCollectedAchievements] = useState([]);

  // Premestite izračunavanje levelProgress ovde nakon inicijalizacije collectedAchievements i achievements.
  const levelProgress = (collectedAchievements.length / achievements.length) * 100;

  const collectAchievement = (id) => {
    setAchievements((prevAchievements) =>
      prevAchievements.map((achievement) =>
        achievement.id === id ? { ...achievement, completed: true } : achievement
      )
    );

    setCollectedAchievements((prevCollectedAchievements) => [
      ...prevCollectedAchievements,
      id,
    ]);
  };


  return (
    <div className="container-achievements">
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement.id}>
              <div className="achievement">
                <div
                  className={`ach${achievement.id}`}
                  alt={`Logo za ${achievement.name}`}
                />
                <div className="achievement-details">
                  <h3>{achievement.name}</h3>
                  <div className="progress-bar">
                    <div
                      className={`progress ${achievement.completed ? 'completed' : ''}`}
                    >
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
        <div class="skill">
            <div class="jenengskill">Achievements Progress: </div> 
            <div class="skill-bar">
                <div class="htmlcss" style={{ width: `${levelProgress}%` }}>
                  <div class="bunder1"><span>{Math.round(levelProgress)}%</span></div>
                </div>
              </div>
            </div>
        </div>


      <div className="nickname">
        <div className="container">
          <div className="box">
            <div className="name_job">Izet Delibasic</div>
            <div className="image">
              
            </div>
            <div className="rating"></div>
            <div className="my-achievements">
              <h3>My Achievements</h3>
              <ul>
                {collectedAchievements.map((collectedId) => (
                  <li key={collectedId}>
                    <div
                      className={`ach${collectedId} profile-image`}
                      alt={`Logo za Achievement ${collectedId}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="btns">
              <hr />
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
