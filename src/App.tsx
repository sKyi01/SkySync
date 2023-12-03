import React from 'react';
import "./globals.css";
import {Routes, Route} from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForms';
import Home from './_root/pages/Home';
//import main from './main';


const App = () => {
  return (
    <main className="flex h-screen">

        <Routes>

            {/* Public Routes */}
            <Route path="/sign-in" element={<SigninForm/>}    />
            <Route path="/sign-up" element={<SignupForm/>}    />




             {/* Private Routes */}

             <Route  index element={<Home/>} />


        </Routes>



    </main>
  
  )
}

export default App
