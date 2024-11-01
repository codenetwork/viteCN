import React, { useState, useEffect } from 'react';
import './index.css';

const CountdownSection = (initialDate) => {
  // const initialDate = '2024-07-12T18:00:00+10:00';

  const calculateTimeLeft = (initialDate) => {
    const difference = +new Date(initialDate.initialDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-AU', { minimumIntegerDigits: 2 }),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-AU', { minimumIntegerDigits: 2 }),
        seconds: Math.floor((difference % (1000 * 60)) / 1000).toLocaleString('en-AU', { minimumIntegerDigits: 2 }),
      };
    }

    return timeLeft;
  };

  const [targetDate, setTargetDate] = useState(initialDate);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(initialDate));
  const [heading, setHeading] = useState("Until the competition closes");

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      // if (Object.keys(newTimeLeft).length === 0 && targetDate === initialDate) {
      //   setTargetDate(newTargetDate);
      //   setHeading("Time until presentations");
      //   setTimeLeft(calculateTimeLeft(newTargetDate));
      // }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span key={interval}>
        <span>{timeLeft[interval]}</span> <span className="interval">{interval}</span>{" "}
      </span>
    );
  });

  if (timerComponents.length === 0) {
    return null; 
  }

  return (
    <div className="countdown">
      <h2>{heading}</h2>
      <div>{timerComponents}</div>
    </div>
  );
};

export default CountdownSection;
