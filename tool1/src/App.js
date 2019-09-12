import React from 'react';
// import './App.css';
import Todolist from './utility/todolist';
import RegisterForm from './utility/registerform';
import MemeGenerator from './utility/MemeGenerator'

function App() {
  return (
    <div className="App">
      <header>here is the thing</header>
      <Todolist/>
      <br/>
      <RegisterForm/>
      <br/>
      <MemeGenerator/>
    </div>
  );
}

export default App;
