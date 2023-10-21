import React from 'react'
import './Profile.css'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className={`flex ${index < 3 ? (index === 0 ? 'first' : index === 1 ? 'second' : 'third') : ''}`} key={index}>
          <div className="rank">{index + 1}</div>
          <div className="name">{value.name}</div>
          <div className="points">Score: {value.score}</div>
          <img src={value.img} alt="" />
        </div>
      ))}
    </>
  );
}




  