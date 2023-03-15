import { useState ,useEffect}  from 'react'
import requests from './requests'
import Row from './components/Row';
import axios from 'axios';
import MainRow from './components/MainRow';
import Banner from './components/Banner';

function App() {

  // console.log(requests);


  return (
    <div className="App">
      <Banner />
      <MainRow/>
    </div>
  )
}

export default App
