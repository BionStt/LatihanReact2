import React,{useState,useEffect} from 'react'
// import  Clock from 'react-Clock'
import './ClockDemo.css'

const ClockDemo = () => {
    const [date, setDate] = useState(new Date());
  
    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);
    return (
      <span>
        {date.toLocaleTimeString()}
      </span>
    );
}

export default ClockDemo
