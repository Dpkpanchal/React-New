import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Header/>
        <Sidebar/>
        <Content/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
