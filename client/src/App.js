import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'

import Index from './components/Index';
import Blog from './components/Blog';

function App() {
  const [data,setData] = useState([{}])

  useEffect(() => {
    axios.get('http://localhost:5001/tags')
      .then(response => {
        setData(data)
      })
  }, [])

  return (
    <div>
      <h1>Hllo world</h1>
    </div>
  );
}

export default App;
