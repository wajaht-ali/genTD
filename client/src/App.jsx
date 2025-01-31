/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./styles/App.css";
import Navbar from "./layout/Navbar";
import { Excalidraw } from "@excalidraw/excalidraw";
import Footer from './layout/Footer';

function App() {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  return (
    <div className="bg-base w-full min-h-screen mx-auto">
      <Navbar />
      <div>
        <p>Excalidraw</p>
        <div className="w-[80%] h-[500px] rounded-xl mx-auto">
          <Excalidraw ref={(api) => setExcalidrawAPI(api)} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;

//[Vizcom tech stack docs]: https://neuralnotebook.substack.com/p/vizcom-ai-engine-turning-doodles