import React, { useState, createRef, useEffect } from "react";
import Streamer from "./components/Streamer";
import AnimateReorder from "./components/AnimateReorder";
import generateRandomPoints from "./helpers/randomPointsGenerator";
import {ListWrapper,ListGroup} from "./styles/styledComponents"
import streamerData from "./helpers/streamerData";

export default function App() {
  const [streamerList, setStreamerList] = useState(streamerData);
  const [intervalId,setIntervalId]=useState(null)

  useEffect(()=>{
      startGeneratingRandomPoints()
      return ()=>{
        clearInterval(intervalId)
      }
  },[])

     // Start generating random stream points every second
     const startGeneratingRandomPoints = ()=>{
      const randomSortingIntervalId = setInterval(()=>{
        setStreamerList(prevState => {
          const reorderedStreamerData = generateRandomPoints(prevState);
          return [...reorderedStreamerData]
        });
      },[1000])
      setIntervalId(randomSortingIntervalId)
    }

  return (
    <>
      <ListWrapper>
       <h3>Streamers Points Table</h3>
        <ListGroup>
          <AnimateReorder>           
            {streamerList.map(({ userID, displayName,score,picture },index) => (
              <Streamer key={userID} id={userID} index={index} displayName={displayName} picture={picture} score={score} ref={createRef()} />
            ))}
          </AnimateReorder>
        </ListGroup>
      </ListWrapper>
    </>
  );
}
