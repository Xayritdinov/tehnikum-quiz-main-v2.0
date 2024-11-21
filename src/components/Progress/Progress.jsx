import React from 'react';

export const Progress = ({ active }) => {
  const units = [1, 2, 3, 4];
  let percent = 100 / units.length * active;

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>       
      </div>
      <div className="indicator__progressbar">
        {units.map((id, index) => (
          <div
            key={index}
            className={`indicator__unit indicator__unit-${id} ${
              id <= active ? '_active' : ''
            }`}
          ></div>
        ))}
      </div>   
      <div className="indicator__text">
        <span className="indicator__description">
        Процесс прохождение опроса:
        </span>
        <span className="indicator__value">{percent}%</span>       
      </div> 
    </div>
  );
};
