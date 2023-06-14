import React from "react";

const InputField = () => {
    return(
    <div>
      <button type = "button" className = "button"><span>Roster</span></button>
      <button className = "button1" style = {{verticalAlign:"middle"}}><span>Meet Lineup</span></button>
      <button className = "button2"> <span>Meet Results</span></button>
      <button className = "button3"><span> Calender </span></button>
    </div>
    ) 
}

export default InputField;