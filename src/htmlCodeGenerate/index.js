import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {

  const [tagName, setTagName] = useState('div');

  const [store, setStore] = useState({});

  const createElementHtml = useCallback((id,tagname) =>{
    var containerdiv = document.createElement(tagname),
        nwtag = document.createElement(tagname),
        createText = document.createTextNode(id);
        nwtag.appendChild(createText);
    containerdiv.appendChild(nwtag);
    return containerdiv.innerHTML;
  },[]);

  return (
    <div className="App">
      <button onClick={() => setTagName('b')}>b</button>
      <button onClick={() => setTagName('i')}>i</button>
      <button onClick={() => setTagName('p')}>p</button>
      {(createElementHtml('anmw',tagName))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
