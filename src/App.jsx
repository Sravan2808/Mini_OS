import "./app.scss";
import React from 'react'
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <MacWindow>Hello</MacWindow>
    </main>
  )
}

export default App
