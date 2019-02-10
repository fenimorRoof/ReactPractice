import React from 'react';

const userInput = (props) => {
  return(
    <div className="UserInput">
      <input style={props.style} onChange={props.onChange} type="text" value={props.username}/>
    </div>
  );
}

export default userInput;