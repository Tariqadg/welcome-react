import { useState } from "react";
const User = ({ name, location }) => {
  const [count] = useState(0);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg text-center">
      <h2 className="text-center"> count:{count}</h2>
      <h2 className="text-center">Name:{name}</h2>
      <h2 className="text-center">location:{location}</h2>
      <h2 className="text-center">contact</h2>
    </div>
  );
};
export default User;
