import React, { useState, useEffect } from 'react';

export const Time = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
          const date = new Date();
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          const seconds = date.getSeconds().toString().padStart(2, '0');
      
          const currentTime = `${hours}:${minutes}:${seconds}`;
          setTime(currentTime);
          console.log(currentTime);
        }, 1000);
      
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div className='time'>
            {time}
        </div>
    );
};
