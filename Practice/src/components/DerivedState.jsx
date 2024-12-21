/* eslint-disable no-unused-vars */
import { useState } from "react";

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];
export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  // Derived state: count of users
  console.log(users);
  const userCount = users.length;
  // Derived state: Average age of users
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;
  return (
    <div className="main-div">
      <h1>User List</h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={index}>
              {curElem.name}-{curElem.age} year old
            </li>
          );
        })}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};
