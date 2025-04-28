import About from "./MyComponents/About.js";
import Alert from "./MyComponents/Alert.js";
import Navbar from "./MyComponents/Navbar.js"
import TextForm from "./MyComponents/TextForm.js"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode]=useState("light");
  const [alert, setAlert]=useState(null);
  const toggleMode =()=>{
    if(mode ==="light"){
      setMode("dark");
      showAlert("Mode has been changed to dark mode", "success");
      document.title="TextUtils - Light Mode";
    }
    else{
      setMode("light");
      showAlert("Mode has been changed to light mode", "success");
    }
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null); 
    }, 1700);
  };
  document.body.style.backgroundColor = (mode==="light") ? "#faedcd" : "#1b263b";
  document.title = (mode==="light") ? "TextUtils - Light Mode" : "TextUtils - Dark Mode";
  return (
    <>
    <BrowserRouter>
      <Navbar title="Jai Jinendra" ghar="Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} showAlert={showAlert}></Alert>
      <Routes>
        <Route path="/" element={<TextForm title="Good Morning" mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </BrowserRouter>
    {/* <Navbar title="Jai Jinendra" ghar="Home" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} showAlert={showAlert}></Alert>
    <TextForm title="Good Morning" mode={mode} showAlert={showAlert}/> */}
    </>
  );
}

export default App;
