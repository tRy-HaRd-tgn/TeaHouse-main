import WebcamComponent from "../webcamera";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light"); // состояние для смены темы
  const [stateArray, replaceContent] = useState("default"); // состояние  для свапа двух форм
  const switchTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }; // переключатель темы

  const HandleClick = () => {
    console.log("clicked");
    replaceContent((current) =>
      current === "default" ? "reversed" : "default"
    );
  }; // свапер форм

  return (
    <div id={theme}>
      <div className="wrapper" id={stateArray}>
        <header>
          <h1>Handshake!</h1>
          <h3 className="pointer">Profile</h3>
          <h3 className="pointer">Settings</h3>
          <h3 className="pointer" onClick={switchTheme}>
            Dark mode
          </h3>
        </header>

        <main className="content ">
          <div className="block_txt">
            <img src="./img/text.svg" />
            <textarea
              className="block_txt-textarea"
              placeholder="Начните вводить текст"
              name="textarea_1"
              id="Укажешь удобный1"
            />
          </div>

          <div className="replace" onClick={HandleClick}>
            {theme === "light" ? (
              <img src="/img/change-circle.svg" />
            ) : (
              <img src="/img/change-circle-dark.svg" />
            )}
          </div>

          <div className="block_gestures">
            <div className="block_gestures-img"></div>
            <img src="./img/hand.svg" />
            <textarea
              className="block_gestures-textarea"
              placeholder="Жесты будут показаны после ввода текста"
              name="textarea_1"
              id="Укажешь удобный2"
              readOnly
            />
          </div>

          {/* <WebcamComponent/>  */}
        </main>

        <footer>
          <div onClick={switchTheme}>
            {theme === "light" ? (
              <img src="/img/moon.svg" />
            ) : (
              <img src="/img/light-theme.svg" />
            )}
          </div>
          <img src="/img/person.svg" />
          <img src="/img/gear.svg" />
        </footer>
      </div>
    </div>
  );
}

export default App;
