import React from 'react'
 //import img from "../image/shrutiphoto.jpeg"
 import img from "../image/file.png"
const Home = () => {
  return (
  <>
  <div className="home-section">
      <div className="text-container">
        <p className="role">UI/UX Designer, Web Developer</p>
        <h1 className="intro ">
          Hi, I am <span className="name">SHRUTI SINGH</span> from Institute of Technical Education And Research
        </h1>
        <a href="ShrutiIntern.pdf" className="download-cv-btn" download>
          Download CV
        </a>
      </div>
      <div className="image-container">
        <img src={img} alt="Shruti Singh" className="profile-image" />
      </div>

    </div>
  </>


  )
}
export const piku=()=>{
  console.log("piku")
}

export default Home;