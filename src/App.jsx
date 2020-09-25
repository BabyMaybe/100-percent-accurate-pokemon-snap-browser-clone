import React from 'react';
import PokemonLoader from './features/PokemonLoader/PokemonLoader.component';
import './App.css';
import Spinner from './features/spinner/spinner.component';
import FramerTest from './features/framer/FramerTest.component';
import BgChanger from './features/framer/BgChanger.component';
import PokeBall from './features/pokeball/pokeball.component';
import Basic from './features/framer/basic.component';
import Bush from './features/bush/Bush.component';
import Camera from './features/Camera/camera.component';
import MenuBar from './features/menuBar/menu-bar.component';

function App() {
  return (
    <div className="App">
      <Bush />
      <Bush />
      <Bush />
      <Bush />
      <Bush />

      {/* <Basic /> */}
      {/* <PokeBall /> */}
      {/* <BgChanger /> */}
      {/* <FramerTest /> */}
      {/* <Spinner /> */}
      {/* <PokemonLoader /> */}
      <MenuBar />
      <Camera />
    </div>
  );
}

export default App;
