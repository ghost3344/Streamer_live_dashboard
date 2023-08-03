import React from "react";


// get DOM positions of all the streamers 
const calculateBoundingBoxes = children => {
  const boundingBoxes = {};

  React.Children.forEach(children, child => {
    const domNode = child.ref.current;
    const nodeBoundingBox = domNode.getBoundingClientRect();

    boundingBoxes[child.key] = nodeBoundingBox;
  });

  return boundingBoxes;
};

export default calculateBoundingBoxes;
