// import logo from './logo.svg';
import "./styles.css";
// import "./Navbar.js";
// import "./Alert.js";
// import "./Textform.js";
import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import About from "./componets/About";
// import TextForm from "./componets/TextForm";
// import Alert from "./componets/Alert";
// import Switch from 'react-router-dom'
// import {
//   HashRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
import Navbar from "./Navbar.js";
import Alert from "./Alert.js";
import TextForm from "./Textform.js";
// import About from './componets/About';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "Success");
      document.title = "TextUtilies-DarkMode";
      setInterval(() => {
        document.title = "TextUtilies is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtilies";
      }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success");
      document.title = "TextUtilies-LightMode";
      setInterval(() => {
        document.title = "TextUtilies is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtilies";
      }, 1500);
    }
  };

  return (
    <>
      {/* <Router>
      <Routes>  
       <Switch>
          <Route path='/about'>
           <About/>
          </Route>
          <Route path='/'>
          
            </Route>
        </Switch>
    {/* <About/> */}
      {/*
      </Routes>
    </Router> */}
      <div className="container my-3">
        <Navbar
          title=""
          textUtilies
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
    </>
  );
}

export default App;

// const [mode, setMode] = useState('light');

// const toggleMode = () => {
//   if(mode === 'light'){
//     setMode('dark')
//     document.body.style.backgroundColor = 'grey';
//   }
//   else{
//     setMode('light')
//     document.body.style.backgroundColor = 'white';
//   }mode={mode} toggleMode={toggleMode}
