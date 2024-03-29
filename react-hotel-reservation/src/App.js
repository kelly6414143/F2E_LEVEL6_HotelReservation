import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import InnerPage from './components/innerPage'
import reservationDetail from './components/reservationDetail'
import finishedReservation from './components/finishedReservation'


// import { Button } from 'reactstrap';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/innerPage/:id' component={InnerPage}/>
        <Route path='/reservationDetail' component={reservationDetail}/>
        <Route path='/finishedReservation' component={finishedReservation}/>
        {/* <Redirect from={`/`} to={`/home`}></Redirect> */}
        {/* <Route path='*' component={ErrorPage}/> */}
      </div>
      <Footer></Footer> 
    </HashRouter>
    // <div>
    //     <div className="App">

    //     <Home></Home>
    //     </div>
    //     <Footer></Footer> 
    // </div>
  );
}

export default App;
