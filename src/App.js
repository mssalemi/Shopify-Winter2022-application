import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "./HomePage";
import SharePage from "./SharePage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/shareable/:id">
            <SharePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}
