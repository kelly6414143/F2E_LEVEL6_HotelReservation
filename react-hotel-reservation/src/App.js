import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import InnerPage from './components/innerPage'
import reservationDetail from './components/reservationDetail'
import createHistory from 'history/createHashHistory'

const history = createHistory({

    basename: 'homepage'

  })

// import { Button } from 'reactstrap';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/innerPage/:id' component={InnerPage}/>
        <Route path='/reservationDetail' component={reservationDetail}/>
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