import React from 'react';
import User from './pages/user/user';
import Input from './pages/input/input';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <User name={'Baky'} age={18} />
      <User name={'Alex'} age={26} />
      <User name={'Serg'} age={27} />
      <Button title={'Save'} />
      <Button title={'Edit'} />
      <Button title={'Delete'} />
      <Input />
      <input />
    </div>
  );
}

export default App;
