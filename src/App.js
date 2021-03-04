import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotMatch from './components/NotMatch/NotMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
          <Review></Review>
           </Route>
          <Route path="/Inventory">
           <Inventory></Inventory>
          </Route>
          <Route exact path="/">
           <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
           <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
           <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
      
      
     
    </div>
  );
}

export default App;
