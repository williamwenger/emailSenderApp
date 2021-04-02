import './App.css';
import { useState } from 'react';
import axios from 'axios';

const initLoginForm = {
  email: '',
  password: ''
};



function App() {
  const [form, setForm] = useState(initLoginForm);

  const onInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  function sendEmail(e){
    e.preventDefault();
    console.log('fuck you');
    // const formJSON = JSON.stringify(form);

    axios.post('http://127.0.0.1:3000/', form)
    .then(res => {console.log(res)})
    .catch(err => {
      console.log('ISSUE!!!')
      console.log(err)
    })
  }
 

  return (
    <div className="App">
      <header className="App-header">
        
        <img src='./yoshi_frog_idk.png' className="App-logo" alt="logo" id = "yoshiSize"/>
        <form className = "vertical">
          <label>Email</label>
          <input id = "email" name = "email" placeholder = " Ex: buttCream69@gmail.com" onChange={onInputChange}></input>
          <label>Password</label>
          <input type="password" id = "password" name = "password" placeholder = "Ex: blink182"></input>
          <button id="login" onClick = {sendEmail}>Are you in?</button>
        </form>
      </header>
    </div>
  );
}

export default App;
