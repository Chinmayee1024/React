export const EventHandling = () => {
  // function handleButtonClick () {
  //   alert("Hey i am onClick event");
  // };
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);

    alert("Hey i am onClick event");
  };
const HandleWelcomeUser=(user)=>{
  alert(`hey ${user} , Welcome `);
  
}
  return (
    <>
      {/* //? function component with named function */}
      <button onClick={handleButtonClick}>Click Me</button>
      <br></br>

      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      <br></br>
      {/* //? Inline event handler */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br></br>
      {/* //? function component with inline arrow function */}
      <button onClick={() => alert("Hey i am inline event function")}>
        Inline Arrow Function
      </button>
      {/* //? passing arguments to event handler */}
      {/* <button onClick={HandleWelcomeUser("Chinmayee")}>Click me</button> */}
      <button onClick={()=>HandleWelcomeUser("Chinmayee")}>Click me</button>
    </>
  );
};
