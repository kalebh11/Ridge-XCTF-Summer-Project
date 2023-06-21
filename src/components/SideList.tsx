import React from "react";

const SideList: React.FC = () => {
  const redirectToCalender= ()=>{
    window.open("https://docs.google.com/document/d/1cnm8DjjD1yZzN8KyD9BxkKGu9SG58L5qmNRECV_O78Q/edit?usp=sharing");
    //change link later!!!
  }
  const redirectToPlans=()=>{
    window.open("https://docs.google.com/document/d/1cnm8DjjD1yZzN8KyD9BxkKGu9SG58L5qmNRECV_O78Q/edit?usp=sharing");
  }
  
  return (
 
 
 <div className="outer">
      <div className="leftSpacing">
        <button className="button3">
          <span>Home </span>
        </button>
      </div>
      <div className="leftSpacing">
        <button className="button3" onClick = {redirectToCalender}>
          
          <span>Calender </span>
        </button>
      </div>
      <div className="leftSpacing">
        <button className="button3">
          <span>Meets </span>
        </button>
      </div>
      <div className="leftSpacing">
        <button className="button3">
          <span>Roster </span>
        </button>
      </div>
      <div className="leftSpacing" onClick = {redirectToPlans}>
        <button className="button3">
          <span>Plans </span>
        </button>
      </div>
    </div>
  );
};

export default SideList;
