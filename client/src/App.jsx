/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/App.css";
import Navbar from "./layout/Navbar";
import Footer from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <div className="bg-base-gradient w-full min-h-screen mx-auto">
      <Navbar />
      <Routes>
        {/* We are using Excalidraw component here, in order to draw sketches. */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

//[Vizcom tech stack docs]: https://neuralnotebook.substack.com/p/vizcom-ai-engine-turning-doodles