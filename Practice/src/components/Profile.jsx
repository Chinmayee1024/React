function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, Have a Wonderful Day !</strong>
          </div>
        }
      >
        <p>Hobbies: Reading,Hiking</p>
        <button>Contact </button>
      </ProfileCard>
      <ProfileCard
        name="eli"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, Have a Wonderful Day !</strong>
          </div>
        }
      >
        <p>Hobbies: Reading,Hiking</p>
        <button>Contact </button>
      </ProfileCard>
      <ProfileCard
        name="elisa"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, Have a Wonderful Day !</strong>
          </div>
        }
      >
        <p>Hobbies: Reading,Hiking</p>
        <button>Contact </button>
      </ProfileCard>
      <ProfileCard
        name="hii"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, Have a Wonderful Day !</strong>
          </div>
        }
      >
        <p>Hobbies: Reading,Hiking</p>
        <button>Contact </button>
      </ProfileCard>
      <ProfileCard
        name="hello"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, Have a Wonderful Day !</strong>
          </div>
        }
      >
        <p>Hobbies: Reading,Hiking</p>
        <button>Contact </button>
      </ProfileCard>
      <ProfileCard
        name="india"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, Have a Wonderful Day !</strong>
          </div>
        }
      >
        <p>Hobbies: Reading,Hiking</p>
        <button>Contact </button>
      </ProfileCard>
    </div>
  );
}
export default Profile;

function ProfileCard({ name, age, greeting, children }) {
  // const { name, age, greeting, children } = props;

  return (
    <>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  ); 
}
