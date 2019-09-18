import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Result from "./pages/Result";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/search/:name" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}
