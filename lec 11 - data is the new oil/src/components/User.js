import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h3>Name: {name}</h3>
      <h3>Address: Swansea, UK</h3>
      <h3>Age: 24</h3>
      <h3>contact: priyanshu0dubey@gmail.com</h3>
    </div>
  );
};

export default User;
