import { useState, useEffect } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div id="datetime">{dateTime}</div>;
};

export default DateTime;