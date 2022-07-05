import React from "react";

function User(props) {
  console.log(props);
  console.log(props.data);
  console.log(props.data.name);

  return (
    <div>
      <h1>User Component</h1>
      <h3>Name:{props.data.name}</h3>
      <h3>Age:{props.data.age}</h3>
    </div>
  );
}

export default User;
