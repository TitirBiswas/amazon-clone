import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';

import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise=loadStripe('pk_live_51JAHrXSJ4Blvy3okgF77xVNrpoWkO0cz3RVkdMyNlUFXL9b7jl9dzdyhEO3yitdzsA8XfvUd79fvf1VOtb2yw6sw00FXs98B8s');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
     //run only once the app component loads
     auth.onAuthStateChanged((authUser) => {
      console.log('User is :',authUser)
      if(authUser){
        //user is/was logged in
        dispatch({
          type:'SET_USER',
           user: authUser,
        })
       }
       else{
         //user logged out
         dispatch({
           type: 'SET_USER',
           user: null
         })
       }
    
    } )
    
  
    }, [])
  return (
    //BEM
    <Router>
    <div className="App">

    <Switch>

    <Route path="/login">
    <Login/>
    </Route>

    <Route path="/checkout">
    <Header />
    <Checkout/>
    </Route>
     
    <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
        <Payment/>
      </Elements>
    </Route>

    <Route path="/orders">
            <Header />
            <Orders/>
            </Route>

      <Route path="/">
      <Header />
    <Home/>
    </Route>

   </Switch>
      </div>
   </Router>

      );   
}

export default App;
