import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';

const App = () => {
  return (
    <div>
      <Navbar />
      <PageContent showboxcount={3} />
    </div>
  )
}

export default App;