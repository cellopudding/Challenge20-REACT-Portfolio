import React from 'react'
import ResumeImage from "../../images/LonnieResume.png"
import "./resume.css"

export default function Resume() {
  return (
    <>
    <div id="resumewrapper">
        <h1 class ="headings">RESUME</h1>
          <div class="resumepic">
          <img src={ResumeImage} alt="resume"/>
          </div>
          </div>
          </>
  )
}
