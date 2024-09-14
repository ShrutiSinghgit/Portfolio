import React from 'react'
import  Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills"
// import 
function App() {

  return (
  <>
     <div> <Navbar/></div>
     <div className="container"><Home/></div>
    <div><Aboutme/></div>
    {/* <div><Skills/></div> */}
  </>
    
  )
}

export default App
