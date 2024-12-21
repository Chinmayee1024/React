export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`hey, ${user} welcome to my page`);
  };
  const handleHover = () => {
    alert(`hey, Thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Chinmayee")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  // eslint-disable-next-line react/prop-types
  const {onClick,onMouseEnter}=props;
  const handleGreetings = () => {
    // alert(`good Morning ${user}`);
    console.log(`Hey User,Welcome`);
    
    onClick();
  };
  return (
    <>
      <button onClick={onClick}>Click Me</button>
      <button onMouseEnter={onMouseEnter}>Hover Me</button>
      <button onClick={handleGreetings}>Greeting</button>
    </>
  );
};
