import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [value, setValue] = useState("");
  const [dupliacate, setDuplicate] = useState([]);
  const [store, setStore] = useState([]);

  const createElementHtml = (id, tagname) => {

    var containerdiv = document.createElement(tagname),
      nwtag = document.createElement(tagname),
      createText = document.createTextNode(id);
    nwtag.appendChild(createText);
    containerdiv.appendChild(nwtag);
    setStore(store => [...store, containerdiv.innerHTML]);
    setDuplicate(store);
  };

  return (
    <div className="App">
      {console.log(store,dupliacate)}
      <button onClick={() => createElementHtml(value, "b")}>b</button>
      <button onClick={() => createElementHtml(value, "i")}>i</button>
      <button onClick={() => createElementHtml(value, "p")}>p</button>
      <input onChange={e => setValue(e.target.value)} type={"text"} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
