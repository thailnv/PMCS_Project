import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homPage";
import { TestPage } from "./pages/testPage";
import { ToeicInfoPage } from "./pages/toeicInfo";
import { ListTestPage } from "./pages/listtestPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/de-thi" component={ListTestPage} />
        <Route path="/kiem-tra/:id" component={TestPage} />
        <Route path="/thong-tin" component={ToeicInfoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
