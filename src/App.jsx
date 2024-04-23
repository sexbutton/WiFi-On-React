import { useState } from "react";
import Nav from "./components/Nav/Nav";
import NavElement from "./components/NavElement/NavElement";

function App() {
  return (
    <>
      <Nav>
        <NavElement state="active">О нас</NavElement>
        <NavElement state="active">Провайдеры</NavElement>
        <NavElement>Тарифы</NavElement>
        <NavElement>Помощю</NavElement>
        <NavElement>Ответы на вопросы</NavElement>
        <NavElement>Контакты</NavElement>
      </Nav>
    </>
  );
}

export default App;
