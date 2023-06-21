import React from "react";
import { useSpring, animated } from 'react-spring';

const SideList: React.FC = () => {
  const redirectToCalender= ()=>{
    window.open("https://docs.google.com/document/d/1cnm8DjjD1yZzN8KyD9BxkKGu9SG58L5qmNRECV_O78Q/edit?usp=sharing");
    //change link later!!!
  }
  const redirectToPlans=()=>{
    window.open("https://docs.google.com/document/d/1cnm8DjjD1yZzN8KyD9BxkKGu9SG58L5qmNRECV_O78Q/edit?usp=sharing");
  }
  
  const slide = useSpring({
    from: {x:-200},
    to: {x: 0},
 
});
  return (
 
 
 <div className="outer">
      <div className="leftSpacing">
        <animated.button style = {slide} className="button3">
          <span>Home </span>
        </animated.button>
      </div>
      <div className="leftSpacing">
        <animated.button style = {slide} className="button3" onClick = {redirectToCalender}>
          
          <span>Calender </span>
        </animated.button>
      </div>
      <div className="leftSpacing">
        <animated.button style = {slide} className="button3">
          <span>Meets </span>
        </animated.button>
      </div>
      <div className="leftSpacing">
        <animated.button style = {slide} className="button3">
          <span>Roster </span>
        </animated.button>
      </div>
      <div className="leftSpacing" onClick = {redirectToPlans}>
        <animated.button style = {slide} className="button3">
          <span>Plans </span>
        </animated.button>
      </div>
    </div>
  );
};

export default SideList;
