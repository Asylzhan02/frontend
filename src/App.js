import Head from "./components/head/head";
import "./components/style/images.css";
import React from "react";
import Routings from "./components/routing/routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  <Routings />;
  return (
    <div>
      <Router>
        <header>
          <Head
            title={"KazLang Analytics"}
            home={"Басты бет"}
            skills={"Оқу"}
            projects={"Біз туралы"}
            contact={"Талдау"}
            register={"Тіркелу"}
            login={"Кіру"}
            redactor={"Мақаланы енгізу"}
          />
        </header>

        <Routings />
      </Router>
    </div>
  );
}

export default App;
