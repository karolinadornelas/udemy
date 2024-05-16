import React from "react";
const UserDetails = ({ name, age, profissao }) => {
  return (
    <div>
      <h4>Pode tirar CNH?</h4>
      <ul>
        <li>usuário: {name}</li>
        <li>usuário: {age}</li>
        <li>usuário: {profissao}</li>
      </ul>
      {age >= 18 ? (
        <div>
          <h5>{name} pode tirar CNH</h5>
        </div>
      ) : (
        <div>
          <h5>não atende aos critérios</h5>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
