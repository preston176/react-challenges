import React from 'react'
import './App.css'
import Product from './Components/Product'

function App() {

  const styles = {
    backgroundColor: "blue",
    border: "1px solid black"
  }

  return (
    <div style={styles}>
      <Product Price="10000 kes" />
    </div>
  )
}

export default App
