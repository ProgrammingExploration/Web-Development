import React from 'react';
import CounterC from './Components/CounterC';
import CounterF from './Components/CounterF';
import Input from './Components/Input';
import Toggle from './Components/Toggle';

const App = () => {
  return (
    <div>
      <Toggle />
      <CounterF />
      <CounterC />
      <Input />
    </div>
  )
}

export default App;