import { useState } from "react";

const ListRender = () => {
  const [users] = useState([
    { id: 1, name: "karolina", age: 23 },
    { id: 2, name: "kariny", age: 14 },
    { id: 3, name: "lilo", age: 14 },
    { id: 4, name: "nicolas", age: 23 },
  ]);

  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListRender;
