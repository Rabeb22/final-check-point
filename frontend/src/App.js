
import { getusers } from './redux/actions';
import {useDispatch} from "react-redux"
import React, { useEffect} from 'react'

import './App.css';
import Ajout from './component/ajout/Ajout';
import ListCard from './component/listCard/ListCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './component/update/Update';

function App() {
const dispatch = useDispatch()
useEffect(() => {
 dispatch(getusers())
}, [])


  return (
    <div className="App">
       <BrowserRouter>
    
    <Routes>
          <Route path="/" element={ <ListCard />}/>

          <Route path="/ajout" element={<Ajout/>}/>
          <Route path="/update/:id" element={<Update/>}/> 
          {/* <Route path="/carte/:id" element={<Detail />}/> */}
         
          
      </Routes>

    </BrowserRouter> 
    </div>
  );
}

export default App;
