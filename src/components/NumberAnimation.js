import { PointsCount, Arrow } from "../styles/styledComponents";
import React, { useEffect, useState } from "react";
import usePrevious from "../hooks/usePrevious";

const NumberAnimation = (props) => {
  const { number, id } = props;
  const previosNumber = usePrevious(number);
  const [prevNumber,setPreNumber]=useState(0)
  const [hide,setHide]=useState(true)

  const animate = (obj, initVal = 0, lastVal = 0, duration) => {
    let startTime = null;

    //pass the current timestamp to the step function
    const step = (currentTime) => {
      //if the start time is null, assign the current time to startTime
      if (!startTime) {
        startTime = currentTime;
      }

      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / duration, 1);

      //calculate what score to be displayed using the value gotten above
      obj.innerHTML =
        Math.floor(progress * (lastVal - initVal) + initVal) + "pts";

      //checking to make sure the score counter does not exceed the last value (lastVal)
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        cancelAnimationFrame(requestAnimationFrame(step));
      }
    };

    //start animating
    requestAnimationFrame(step);
  };

  useEffect(() => {
    setPreNumber(previosNumber)
    let counterId = document.getElementById(id);
    // call animate fuction whenever score changes and update score with animation of 500ms
    animate(counterId, previosNumber, number, 500);
    setHide(false)
    
    //auto Hide arrow after fixed time
    setTimeout(()=>{
      setHide(true)
    },[800])

  }, [number]);




  return (
    <>
      <PointsCount>
        <Arrow
          $degree={prevNumber < number ? "-135deg" : "45deg"}
          $direction={
            (prevNumber === 0 || prevNumber === undefined) || hide ? "stable" : prevNumber < number
              ? "up": "down"
          }
        ></Arrow>
        <span id={id}></span>
      </PointsCount>
    </>
  );
};

export default NumberAnimation;
