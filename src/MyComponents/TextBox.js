import React, { useState } from 'react'

export default function TextBox(props) {

      const onStartTyping = () => {
            if (text === "Enter Text Here")
                  setText("");
      }

      const upButtonClick = () => {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted To Uppercase", "success");
      }

      const lowButtonClick = () => {
            console.log("Upper-Case Function Called " + text);
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted To Lowercase", "success");
      }

      const clearButtonClick = () => {
            setText("");
            props.showAlert("Text Cleared", "success");
      }

      const removeAllSpacesButtonClick = () => {
            let newText = text.split(" ").join("");
            setText(newText);
            props.showAlert("All Spaces Removed", "success");
      }

      const removeExtraSpacesButtonClick = () => {
            let newText = text.replace(/ +/g, ' ');
            setText(newText);
            props.showAlert("All Extra Spaces Removed", "success");
      }

      const copyText = () => {
            navigator.clipboard.writeText(text);
            props.showAlert("Text Copied To Clipboard", "success");
      }


      const onChangeEvent = (event) => {
            setText(event.target.value);
      }

      const [text, setText] = useState("Enter Text Here");
      return (
            <>
                  <div className='Container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>{props.heading}</h2>
                        <div className="mb-3">
                              <textarea className="form-control" value={text} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
                                    onClick={onStartTyping} onChange={onChangeEvent} id="TextBox" rows="5"></textarea>
                        </div>
                        <div className="buttons">
                              <button className="btn btn-primary" onClick={upButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Convert To Uppercase</button>
                              <button className="btn btn-primary mx-3" onClick={lowButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Convert To Lowercase</button>
                              <button className="btn btn-primary" onClick={clearButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Clear Text</button>
                              <button className="btn btn-primary mx-3" onClick={removeAllSpacesButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Remove All Spaces</button>
                              <button className="btn btn-primary" onClick={removeExtraSpacesButtonClick} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Remove Extra Spaces</button>
                              <button className="btn btn-primary mx-3" onClick={copyText} style={{ color: props.mode === 'dark' ? 'white' : "black" }}>Copy To Clipboard</button>
                        </div>

                  </div>
                  <div className='Container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2>Text Summary</h2>
                        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words, {text.length - (text.split(" ").length - 1)} Characters, {text.split(" ").length - 1} Whitespaces</p>
                  </div>
            </>
      )
}
