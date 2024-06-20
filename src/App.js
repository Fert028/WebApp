import React from "react";

import './icons/close2.png';
import './icons/нейм.png';
import './icons/криптоволк.png';
import './icons/ковер.png';

import CustomButton from "./components/CustomButton";
import Subscription from "./components/Subscription";
import ExaminationButton from "./components/ExaminationButton";
import TgButton from "./components/TgButton";

function App() {
  let webApp = window.Telegram.WebApp;

  // if (webApp.initDataUnsafe.user && webApp.initDataUnsafe.start_param) {
  //   fetch('https://randomprimebot.online/api/participate', {
  //     method: "POST",
  //     body: JSON.stringify(webApp.initData.data)
  //   }).then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       console.error("Ошибка при отправке запроса на сервер");
  //       return Promise.reject(new Error("Ошибка при отправке запроса на сервер"));
  //     }
  //   }).then((data) => {
  //     // alert(data.result_text);
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // } else {
  //   console.error("Отсутствуют необходимые поля в webApp.initDataUnsafe");
  // }

  const test = require('./test.json');

  test.chats.forEach(function(chanals, index, arr) {
    console.log(chanals.name);
    console.log(index);
    console.log(arr);
  });


  return (
    <div className="App">
      <div className="container">

        <header className="header">
          <img className="header__img" src="icons/close2.png" alt="close" />
          <div className="header__title">
            <h3>Вы ещё не выполнили <br/> условия розыгрыша</h3>
            <p>Подпишитесь на все каналы указанные ниже.</p>
          </div>
        </header>

        <br/>

        <main>

          <section className="sectionTimer">
            <div className="sectionTimer__title">
              <h3>1 день, 23:26:47</h3>
              <p className="ccc">Осталось до завершения розыгрыша</p>
            </div>
            <div className="sectionTimer__button">
              <CustomButton link='/' text='Подробнее о розыгрыше' width='187px' />
            </div>
          </section>

          <br/>

          <section className="sectionSubscriptions">
            <Subscription logo='icons/нейм.png' name='Нейм' />
            <Subscription logo='icons/криптоволк.png' name='Криптоволк' />
            <Subscription logo='icons/ковер.png' name='Ковер' />
          </section>

          <br/>

          <section className="examination">
            <ExaminationButton link='/' />
          </section>

        </main>

        <footer className="footer">
          <TgButton link='/' />
        </footer>

      </div>
    </div>
  );
}

export default App;
