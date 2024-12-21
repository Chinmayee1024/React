/* eslint-disable react/prop-types */
import { useState } from "react";
import "../EV.css";
export const State = () => {
  // let value = 0;
  // const handleButtonClick = () => {
  //   value++;
  //   console.log(value);
  // };
  let [count, setCount] = useState(0);
  console.log("Parent component rendered");
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </section>
      <ChildComponent count={count} />
    </>
  );
};
export const ChildComponent = ({count}) => {
  console.log("Child component rendered");

  return( 
  <div className="main-div">
    <h2>Child Component-{count}</h2>
  </div>
  );
};
export const Sibling = () => {
  console.log("Sibling component rendered");

  return( 
  <div className="main-div">
    <h2>Sibling Component</h2>
  </div>
  );
};
