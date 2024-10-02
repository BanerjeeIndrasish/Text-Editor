import React, { useState } from 'react'

export default function TextBox(props) {
      const [text, setText] = useState("Enter Text Here");
      const onStartTyping = () => {
            if (text === "Enter Text Here")
                  setText("");
      }

      const emptyText = ()=>{
            if(text.trim()===''){
                  props.showAlert("No Text To Execute", "warning", "red");
                  console.log("No text ", text);
                  return true;
            }
            else{return false}
      }

      const upButtonClick = () => {
            if(emptyText()) return;
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted To Uppercase", "success");
      }

      const lowButtonClick = () => {
            if(emptyText()) return;
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted To Lowercase", "success");
      }

      const clearButtonClick = () => {
            if(emptyText()) return;
            setText("");
            props.showAlert("Text Cleared", "success");
      }

      const removeAllSpacesButtonClick = () => {
            if(emptyText()) return;
            let newText = text.split(" ").join("");
            setText(newText);
            props.showAlert("All Spaces Removed", "success");
      }

      const removeExtraSpacesButtonClick = () => {
            if(emptyText()) return;
            let newText = text.replace(/ +/g, ' ');
            setText(newText);
            props.showAlert("All Extra Spaces Removed", "success");
      }

      const copyText = () => {
            if(emptyText()) return;
            navigator.clipboard.writeText(text);
            props.showAlert("Text Copied To Clipboard", "success");
      }


      const onChangeEvent = (event) => {
            setText(event.target.value);
      }

      return (
            <>
                  <div className='Container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>{props.heading}</h2>
                        <div className="mb-3">
                              <textarea className="form-control" value={text} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
                                    onClick={onStartTyping} onChange={onChangeEvent} id="TextBox" rows="5"></textarea>
                        </div>
                        <div className="buttons">
                              <button className="btn btn-success" onClick={upButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Convert To Uppercase</button>
                              <button className="btn btn-success" onClick={lowButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Convert To Lowercase</button>
                              <button className="btn btn-success" onClick={removeAllSpacesButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Remove All Spaces</button>
                              <button className="btn btn-success" onClick={removeExtraSpacesButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Remove Extra Spaces</button>
                              <button className="btn btn-success" onClick={clearButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Clear Text</button>
                              <button className="btn btn-success" onClick={copyText} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Copy To Clipboard</button>
                        </div>

                  </div>
                  <div className='Container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>Text Summary</h2>
                        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words, {text.length - (text.split(" ").length - 1)} Characters, {text.split(" ").length - 1} Whitespaces</p>
                  </div>
            </>
      )
}
