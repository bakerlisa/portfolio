import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Index from './components/pages/Index';

function App() {
  return (
    <BrowserRouter >


          <Index />
        

    </BrowserRouter>
  );
}

export default App;
