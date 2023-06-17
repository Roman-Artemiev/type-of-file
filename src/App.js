import React from 'react';

import './Styles/App.css';
import './Styles/ResetStyles.css'


function App() {
    return (
        <div className="App">
            <div class="wrapper">
        <div class="file__container">
            <h2 class="title">
                To determine the format, select a file or drag it here and wait for the page to load.
            </h2>
            <img src="./img/Png/folder-icon.png" alt="Folder-icon" class="folder-icon"/>
            <fieldset class="file-area">
                <label for="file">
                    <input type="file" id="file" class="file"/>
                </label> 
                <label class="file-button" for="file">
                    Choose file
                </label> 
            </fieldset>
        </div>
        <div class="pop-up">
            <div class="close__pop-up">
                <img src="./img/Svg/Close-icon.svg" alt="Close"/>
            </div>
            <div class="type__container">
                <h1 class="pop-up__title">
                    Your file is
                </h1>
                <p class="postscript"></p>
            </div>
            
            <p class="result"></p>
        </div>
    </div>
        </div>
    );
}

export default App;
