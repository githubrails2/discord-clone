import React from 'react';

import { Counter } from './features/Counter';
import './App.css';
import {Sidebar,Chat} from './components';
const App = ( )=>  {
  return (
    <div className="app">
      
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
