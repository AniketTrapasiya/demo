import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import Signin from './components/Signin.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
import Alert from './components/Alert';
import Homepage from './components/project/Homepage';
import Userprofile from './screens/Userprofile';
import AddProduct from './screens/AddProduct';
import ShowProducts from './screens/ShowProducts';
import ProductDetail from './screens/ProductDetail';
import EditProduct from './screens/EditProduct';




export default function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const [user, setSigninUser] = useState({})

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#242158';
      showAlert("Dark mode has been enable", "success")


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")

    }
  }

  return (
    <>
      <div>

        <Router>
          <Navbar title="Textutils" about='About' mode={mode} toggleMode={toggleMode} />

          <Alert alert={alert} />
          {/* <Sidebar /> */}
          <Routes>
            <Route exact path="/home" element={<Homepage />}>
            </Route>
            <Route path='/addProduct' element={<AddProduct mode={mode} />} />
            <Route exact path='/products' element={<ShowProducts heading="SHOW ALL PRODUCTS" mode={mode} />} />
            <Route exact path='/product/edit/:id' element={<EditProduct mode={mode} />} />
            <Route exact path='/products/product/:id' element={<ProductDetail mode={mode} />} />
            <Route path="/" element={<Signin showAlert={showAlert} setSigninUser={setSigninUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userprofile" element={<Userprofile />} />
          </Routes>

        </Router>
      </div>
    </>

  );
}

// element={user && user._id ? <Home setSigninUser={setSigninUser} /> : <Signin setSigninUser={setSigninUser} />}







