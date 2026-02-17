import "./app.scss";
import React from 'react'
import Dock from "./components/Dock";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
    </main>
  )
}

export default App
