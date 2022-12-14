import React, { useEffect, useState } from "react";

function UseEffectTest() {
  const [resourceType, setResourceType] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);
  return (
    <div>
      <button onClick={() => setResourceType("Posts")}> Posts </button>
      <button onClick={() => setResourceType("Users")}> Users </button>
      <button onClick={() => setResourceType("Comments")}> Comments </button>
      <h2>{resourceType} </h2>
    </div>
  );
}

export default UseEffectTest;
