import React from "react";
import {useState} from "react"
import Child from "./Child";


function Parent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="parent" style={{ backgroundColor: "purple", padding: "20px" }}>
      <h1 style={{ height: "100px" }}>Parent Component</h1>

      {console.log(showModal)}

      <Child stateVar={showModal} stateFun={setShowModal} />
    </div>
  );
}

export default Parent;
