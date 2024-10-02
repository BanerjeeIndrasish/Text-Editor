import React, { useState } from 'react';
import './App.css';
import Navbar from './MyComponents/Navbar';
import TextBox from './MyComponents/TextBox';
import Alert from './MyComponents/Alert';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
      if(mode === 'dark')
      {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Darkmode Disabled", "success");
      }        
      else  
      {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Darkmode Enabled", "success");
      }
    }

  const showAlert = (message, type, color)=>{
    setAlert({
      msg: message,
      type: type,
      color: color
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>      
        <Navbar title = "Text Utility Portal" mode={mode} toggleMode={toggleMode}/>
        <Alert alert= {alert}/>
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="" element={<TextBox showAlert={showAlert} heading="Enter Text Below" mode={mode} />} />
          </Routes>
        </div>     
      </Router>
      
    </>
  );
}

export default App;
