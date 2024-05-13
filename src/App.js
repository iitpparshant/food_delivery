import React from 'react';
import './App.css';
import Footer from './conponents/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import SignUp from './screens/SignUp/SignUp';
import { CartProvider } from './conponents/ContextReducer/ContextReducer';
import MyOrder from './screens/MyOrder/MyOrder';

// password mongo atlas   IyzvLmFoprJqcwp3

function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createuser" element={<SignUp/>}/>
        <Route path="/myOrder" element={<MyOrder/>}/>
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
