import React from 'react'

function Child({stateVar, stateFun}) {
  return (
    <div style={{backgroundColor:"red"}}>
        <h2>Child Component</h2>

        <br />
        <button onClick={()=>stateFun(!stateVar)}>Show Modal</button>
        {stateVar?<>
        <h3>Modal Content</h3>
        <p>This is the modal content.</p>
        </>:
        <></>}
        
        
         
    </div>
  )
}

export default Child