import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/auth.js"
import Detail from "./components/detail.js"
import List from "./components/list.js"
import banner from  "./images/banner.png"

function App() {

  return (
    <div>
      <div>
        <div style={{width:"50%", display: "flex", justifyContent: "center", margin:"auto"}}>
          <h1 >Adopta un Robot con Robot Lovers</h1>
        </div>
        <div style={{width:"50%", display: "flex", justifyContent: "center", margin:"auto", paddingBottom:"5%"}}>
          <img src={banner}></img>
        </div>
      </div>

      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/auth"/>}/>

          <Route path="/auth" element={<Auth />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/detail/:Id" element={<Detail />}/>
        </Routes>
      </div>
    </BrowserRouter>

    </div>

);
}

export default App