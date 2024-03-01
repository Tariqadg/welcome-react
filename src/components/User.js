import { useState } from "react";
const User = ({ name, location }) => {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h2> count:{count}</h2>
      <h2>Name:{name}</h2>
      <h2>location:{location}</h2>
      <h2>contact</h2>
    </div>
  );
};
export default User;
