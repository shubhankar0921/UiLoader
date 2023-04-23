import React from 'react'
import "./navbar_style.css"


export default function Navbar() {
  setTimeout(() => {
    document.getElementById("navbar").style.display = "flex"
  }, 8000);
  return (
    <>
     <div className="navbar" id="navbar">
        <h1 className="title">DesignItUp</h1>
        
     </div>
    </>
  )
}
