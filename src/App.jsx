import React from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import DownSide from './components/DownSide/DownSide';
import TopSide from './components/TopSide/TopSide';
import MiddleSide from './components/MiddleSide/MiddleSide';


const App = () => {
  return (
    <>

      <TopSide />
      <MiddleSide />
      <SideBar />
      <DownSide />

    </>
  )
}

export default App;