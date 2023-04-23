import React from 'react'
import "./design_style.css"

export default function Design() {


    setTimeout(() => {
        document.getElementById("design").style.display = "none"
    }, 8000);
  return (
    <div className="main" id="design"> 

        <div className="design" >
            <div id='selector' className="selector">
                <div className="cursor_img"></div>
            </div>
            <div className="loading" id='loading'>
                <h1 className="load_text" id='load_text1'>L</h1>
                <h1 className="load_text" id='load_text2'>O</h1>
                <h1 className="load_text" id='load_text3'>A</h1>
                <h1 className="load_text" id='load_text4'>D</h1>
                <h1 className="load_text" id='load_text5'>I</h1>
                <h1 className="load_text" id='load_text6'>N</h1>
                <h1 className="load_text" id='load_text7'>G</h1>
                <h1 className="load_text" id='load_text8'>.</h1>
                <h1 className="load_text" id='load_text9'>.</h1>
            </div>

    </div>
    <div className="color_bar">
        <div id='red' className="red"></div>
        <div id='green' className="green"></div>
        <div id='blue' className="blue"></div>
        <div id='button' className="button"></div>
    </div>
    </div>
  )
}
