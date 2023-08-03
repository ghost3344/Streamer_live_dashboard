import React, { useState, useLayoutEffect, useEffect } from "react";
import usePrevious from "../hooks/usePrevious";
import calculateBoundingBoxes from "../helpers/calculateBoundingBoxes";

const AnimateReorder = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    // get positions of all the streamers after reordering
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    // get positions of all the streamers before reordering
    const prevBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
    if (hasPrevBoundingBox) {
      // check if streamers position is changed
      React.Children.forEach(children, child => {
        const domNode = child.ref.current;
        const firstBox = prevBoundingBox[child.key];
        const lastBox = boundingBox[child.key];
        const changeInY = firstBox.top - lastBox.top;

        if (changeInY) {
          requestAnimationFrame(() => {
            // Before the DOM paints, invert streamer's position to old position
            domNode.style.transform = `translateY(${changeInY}px)`;
            domNode.style.transition = "transform 0s";

            requestAnimationFrame(() => {
              // After the previous frame, remove the transistion to reorder streamers
              domNode.style.transform = "";
              domNode.style.transition = "transform 500ms";
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
};

export default AnimateReorder;
