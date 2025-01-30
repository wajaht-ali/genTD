/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="bg-base w-full h-screen">
      <Navbar />
      <p className="w-full flex flex-row items-center justify-center">App.jsx</p>
    </div>
  )
}

export default App;

//[Vizcom tech stack docs]: https://neuralnotebook.substack.com/p/vizcom-ai-engine-turning-doodles