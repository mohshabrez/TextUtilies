import React, { useState } from "react";

export default function TextForm(props) {
  const handlerUpClick = () => {
    // console.log("clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success");
  };
  const handlerLoClick = () => {
    // console.log("clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "Success");
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "Success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlfor="myBox" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control my-2 my-1"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn-primary mx-2 my-1"
            onClick={handlerUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn-primary mx-2 my-1"
            onClick={handlerLoClick}
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn-primary mx-2 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn-primary mx-2 my-1"
            onClick={handleSpaces}
          >
            Remove Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "write something here to preview"}</p>
      </div>
    </>
  );
}
// style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}
// {text.length>0?text:"write something to preview"}
