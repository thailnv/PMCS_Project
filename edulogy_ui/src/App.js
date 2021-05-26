import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homPage";
import { TestPage } from "./pages/testPage";
import ListTestPage from "./pages/listTestPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/kiem-tra/:id" component={TestPage} />
        <Route path="/kiem-tra" component={ListTestPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
