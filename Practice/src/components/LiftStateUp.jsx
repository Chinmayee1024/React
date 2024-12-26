/* eslint-disable react/prop-types */
import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};
const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is:{inputValue}</p>;
};