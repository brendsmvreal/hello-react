import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (<button onClick={props.onClick}>{props.children}</button>);
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    setName(() => "");
  };

  const hello = () => {
    return (name && <h1>Hello {name}</h1>
    );
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Type your name'>
      </input>
      <Button onClick={reset}>Reset</Button>
      {hello()}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));