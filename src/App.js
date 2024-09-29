import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/auth.js"
import Detail from "./components/detail.js"
import List from "./components/list.js"
import banner from  "./images/banner.png"

import {FormattedMessage, useIntl} from 'react-intl';

function App() {

  const intl = useIntl();

  return (
    <div>
      <div>
        <div style={{width:"50%", display: "flex", justifyContent: "center", margin:"auto", textShadow: "1px 1px 3px black"}}>
          <h1 >{intl.formatMessage({id:"banner"})}</h1>
        </div>
        <div style={{width:"50%", display: "flex", justifyContent: "center", margin:"auto", paddingBottom:"2%"}}>
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

      <div>
        <p style={{width:"50%", display: "flex", justifyContent: "center", margin:"auto", paddingTop:"0%"}}>{intl.formatMessage({id:"contact"})}: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </div>

    </div>

);
}

export default App