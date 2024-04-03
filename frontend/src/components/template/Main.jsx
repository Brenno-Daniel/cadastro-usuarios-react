import "./Main.css";
import React from "react";
import Header from "./Header";

const Main = (props) => (
  <React.Fragment>
    <Header />
    <main className="content">Conteúdo</main>
  </React.Fragment>
);

export default Main;