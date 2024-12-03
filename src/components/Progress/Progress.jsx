import classNames from "classnames";

export const Progress = ({ steps=4, activeStep }) => {
  const units = Array(steps).fill(0);  

  let percent = (100 / steps) * (activeStep - 1);

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Скидка за прохождение опроса:</span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
        {units.map((_, index) => (
          <div
            key={index}
            className={classNames({
              indicator__unit: true,
              [`indicator__unit-${index + 1}`]: true,
              _active: index < activeStep,
              _current: index === activeStep - 1,
            })}
          ></div>
        ))}
      </div>
      <div className="indicator__text">
        <span className="indicator__description">Процесс прохождение опроса:</span>
        <span className="indicator__value">{percent}%</span>
      </div>
    </div>
  );
};
