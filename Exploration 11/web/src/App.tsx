import React from 'react';
import Button from './Components/Button';

const App = (): JSX.Element => {
  return (
    <div>
      <Button title='Button' onClick={() => console.log('Hi')} age={5} />
    </div>
  );
};

export default App;