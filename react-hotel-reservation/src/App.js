import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import InnerPage from './components/innerPage'
import reservationDetail from './components/reservationDetail'


// import { Button } from 'reactstrap';

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Home></Home>
        {/* <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/innerPage/:id' component={InnerPage}/>
          <Route path='/reservationDetail' component={reservationDetail}/>
        </div> */}
      <Footer></Footer> 
    </div>
    // </BrowserRouter>
    // <div>
    //     <div className="App">

    //     <Home></Home>
    //     </div>
    //     <Footer></Footer> 
    // </div>
  );
}

export default App;
