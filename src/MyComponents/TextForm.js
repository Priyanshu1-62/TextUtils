import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, Settext]=useState("Enter text here");

  const handleUpClick = (e)=>{
    console.log("UpChange button was clicked");
    Settext(text.toUpperCase());
    props.showAlert("Your input has been converted to UpperCase!", "success");
  }
  const handleLowClick = (e)=>{
    console.log("LowChange button was clicked");
    Settext(text.toLowerCase());
    props.showAlert("Your input has been converted to LowerCase!", "success");
  }
  const handleRemoveSpace = (e)=>{
    Settext(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Extra spaces has been removed!", "success");
  }
  const handleClearText = (e)=>{
    Settext("");
    props.showAlert("Text cleared!", "danger");
  }
  const handleCopy = (e)=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleOnChange = (e)=>{
    console.log("OnChange is fired");
    Settext(e.target.value);
  }
  return (
    <>
    <div className="container">
        <h1 style={ {color: props.mode === "light" ? "black" : "white"} }>{props.title}</h1>
        <textarea className="form-control" style={ {backgroundColor: props.mode === "light" ? "white" : "#273F4F", color: props.mode === "light" ? "black" : "white"} } rows="4" value={text} onChange={handleOnChange}></textarea>
        <button disabled={text.length===0} className="btn btn-primary mr-2 my-1" onClick={handleUpClick}>Convert TO UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert TO LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleCopy}>Copy to clipboard!</button>
    </div>
    <div className="container my-3" style={ {color: props.mode === "light" ? "black" : "white"} }>
      <h2>Your Text Summary</h2>
      <p>Your text has {text.length===0 ? 0 : text.replace(/\s+/g, ' ').trim().split(' ').length} words and {text.length} characters</p>
    </div>
    </>
  )
}
