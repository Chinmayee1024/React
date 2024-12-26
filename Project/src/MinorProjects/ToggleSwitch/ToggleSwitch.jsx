import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor={ backgroundColor: isOn ? "#0eaa13" : "" }
  return (
    <>
    <h1 style={{textAlign:"center"}}>Toggle Switch <IoIosSwitch  style={{color:"red"}}/></h1>
    <div 
      className="toggle-switch "
      style={toggleBGColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
    </>
  );
};
