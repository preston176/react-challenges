import { useState } from 'react';
import './App.css'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2';


function App() {

  const [activePage, setActivePage] = useState('');

  function setPage (e) {
    setActivePage(e)
    return (<e />)
  }

  return (
    <>
      <h2>THIS IS MY FIRST PAGE</h2>
      <nav><button className="" onClick={(e) =>e.value(setPage)} value="Page1">Page1</button>
      <button className="" onClick={setPage}>Page2</button></nav>
    <div className="">{activePage}</div>
    </>
  )
}

export default App
