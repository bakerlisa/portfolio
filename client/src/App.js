import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Index from './components/Index';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter >

      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
