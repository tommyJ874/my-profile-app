import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Portfolio from './components/Portfolio';
import LetsTalk from './components/LetsTalk';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App select-none text-gray-600 flex flex-col h-auto bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to'>
        <AboutMe></AboutMe>
        <WhatIDo></WhatIDo>
        <Portfolio></Portfolio>
        <LetsTalk></LetsTalk>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
