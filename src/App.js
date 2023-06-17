import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Styles/App.css';
import './Styles/ResetStyles.css';

import PopUp from './Components/PopUp/PopUp';

function App() {
  const [show, setShow] = useState(false);
  const [typeFile, setTypeFile] = useState('');
  const [fileExtension, setFileExtension] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <div className="file__container">
          <h2 className="title">
            To determine the format, select a file or drag it here and wait for the page to load.
          </h2>
          <img src="./img/Png/folder-icon.png" alt="Folder-icon" className="folder-icon" />
          <fieldset className="file-area">
            <label htmlFor="file">
              <input
                value={typeFile}
                onChange={(event) => {
                  setShow(!show);
                  setTypeFile(event.target.value);
                  const extension = event.target.value.slice(event.target.value.lastIndexOf('.') + 1);
                  setFileExtension(extension);
                  console.log(extension);
                }}
                type="file"
                id="file"
                className="file"
              />
            </label>
            <label className="file-button" htmlFor="file">
              Choose file
            </label>
          </fieldset>
        </div>
        <CSSTransition classNames="alert" in={show} timeout={300} unmountOnExit>
          <React.Fragment>
            {show && <PopUp postscript={fileExtension} closeWindow={() => setShow(!show)} />}
          </React.Fragment>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
