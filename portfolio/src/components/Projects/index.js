import React from 'react'
import "./projects.css"
import QuizardImage from "../../images/Quizard.png"
import BreakingDadImage from "../../images/BreakingDad.png"

export default function Projects() {
  return (
    <>
    <div id="work">
      <h1 class="headings">PROJECTS</h1>
      <div class="gallery">
        <div>
        <a href="https://warm-shore-84336.herokuapp.com/" target="_blank" rel="noreferrer">
        <img src={QuizardImage} alt="Quizard"></img>
        </a>
        <a href="https://cellopudding.github.io/BreakingDad/" target="_blank" rel="noreferrer">
         <img src={BreakingDadImage} alt="BreakingDad"></img> 
        </a>
        </div>

     


 </div>
    </div>
    
    </>
  )
}
