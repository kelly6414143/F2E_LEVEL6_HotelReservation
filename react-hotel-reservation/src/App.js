import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import InnerPage from './components/innerPage'

// import { Button } from 'reactstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/innerPage/:id' component={InnerPage}/>
      </div>
      <Footer></Footer> 
    </Router>
    // <div>
    //     <div className="App">

    //     <Home></Home>
    //     </div>
    //     <Footer></Footer> 
    // </div>
  );
}

export default App;
