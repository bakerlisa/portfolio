import './App.css';
import React, {useState, useEffect} from 'react'

import Index from './components/Index';
import Blog from './components/Blog';

function App() {
  const [data,setData] = useState([{}])

  useEffect(() => {
    fetch("/tags/1").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      <h1>Hllo world</h1>
    </div>
  );
}

export default App;
