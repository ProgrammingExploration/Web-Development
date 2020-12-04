import React from 'react';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';
import Switch from './Switch';

const App = () => {
  const name = "Aditya";
  const age = 13;
  
  const isMarried = false;

  if(name == "Om") {
    return (
      <h1>My name is {name}</h1>
    )
  }

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Hello h2</h2>
      <button>Hello</button>
      <input />
      <h1>My name is {name} and I am {age} years old.</h1>
      <h2>Om {isMarried ? "is" : "is not"} married</h2>
      <Button title="This button" />
      <Button title="Something else" />
      <Input placeholder="Age: " />
      <Input placeholder="Name: " />
      <Counter />
      <Switch />
    </div>
  )
};

export default App;
