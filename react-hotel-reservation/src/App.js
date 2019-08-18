import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
// import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="topArea">
        <Header></Header>
        <Content></Content>
      </div>
      <Footer></Footer> 
    </div>
  );
}

export default App;
