import {Flex,StreamIndex,AvatarImage,Text} from "../styles/styledComponents"
import React, { forwardRef } from "react";
import Count from "./NumberAnimation";
const IMAGE_URL = "https://loremflickr.com/40/40/actor";

const Streamer = forwardRef(({ displayName,score,index,id }, ref) => (
    <Flex>
    <StreamIndex  $backgroundColor={index === 0 ? "red" : index === 1 ? "#db6a00" : index ===2 ? "#ff6f00" : "#87CEEB"}><p >{index+1}</p></StreamIndex>
    <Flex ref={ref} $width="100%">
    <AvatarImage style={{backgroundImage : `url('${IMAGE_URL}?random=${index}'`}}></AvatarImage>
    <Flex $justify="space-between" $width="100%" >
    <Text>{displayName}</Text>
    <Count number={score} id={id}/>
    </Flex>
    </Flex>
  </Flex>
));

export default Streamer;
