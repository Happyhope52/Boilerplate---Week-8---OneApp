import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route,
} from "react-router-dom";

import './index.css';

import App from './App';
import Temp_CM from '/classMaterial/Temp_CM';
import Temp_CP from '/classProjects/Temp_CP';
import Temp_HW from '/classhomeWork/Temp_HW';


ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/classMaterial/tempCM" element={<Temp_CM/>} />
      <Route path="/classProjects/tempCP" element={<Temp_CP/>} />
      <Route path="/homeWork/tempHW" element={<Temp_HW/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

