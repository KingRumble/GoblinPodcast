import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Display from './Components/Display/Display';

function App() {
  return (
    <>
    	<BrowserRouter>
     		<Display />
     	</BrowserRouter>
    </>
  );
}

export default App;
