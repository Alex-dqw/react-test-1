import React, { useState } from 'react';
import User from './pages/user/user';
import Button from './components/button/Button';
import Example from './components/example/Example';
import Header from './components/header/Header';
import NewComponent from './components/newComponent/NewComponent';
import Modal from './components/modal/Modal';
import CountPage from './pages/countPage/CountPage';
import Input from './components/input/Input';
import InputShow from './components/inputShow/InputShow';

function App() {
  const navbar = ['Главная', 'О нас', 'Контакты'];
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')
  const onChangeInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  }
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div className="App">
        {
          show && <Modal handleShow={handleShow}>
            <p>Что-нибудь</p>
          </Modal>
        }
        <button onClick={handleShow}>Открыть</button>
        <div className='wrapper'></div>
        <CountPage />
        <InputShow input={input} />
        <Input placeholder={'напишите'} onChangeInput={onChangeInput} />
    </div>
  );
}

export default App;
