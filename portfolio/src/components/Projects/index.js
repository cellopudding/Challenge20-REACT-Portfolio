import React from 'react'
import "./projects.css"
import QuizardImage from "../../images/Quizard.png"
import BreakingDadImage from "../../images/BreakingDad.png"
import PasswordImage from "../../images/PasswordGenerator.png"
import NoteTaker from "../../images/note-taker.png"
import EmployeeTracker from "../../images/EmployeeTracker.png"
import ReadMeGenerator from "../../images/ReadMeGenerator.png"
import SocialMediaMongo from "../../images/SocialMediaMongo.png"
import Scheduler from "../../images/Scheduler.png"

export default function Projects() {
  return (
    <>
    <div id="work">
      <h1 class="headings">PROJECTS</h1>
      <div class="gallery">
        <div>
        <a href="https://warm-shore-84336.herokuapp.com/" target="_blank" rel="noreferrer">
        <img src={QuizardImage} alt="Quizard"/>
        </a>
        <a href="https://cellopudding.github.io/BreakingDad/" target="_blank" rel="noreferrer">
         <img src={BreakingDadImage} alt="BreakingDad"/>
        </a>
        <a href="https://cellopudding.github.io/Javascript03-Password-Challenge/" target="_blank" rel="noreferrer">
         <img src={PasswordImage} alt="passwordgenerator"/> 
        </a>
        <a href="https://github.com/cellopudding/Lets-Take-Notes-Module11-Challenge" target="_blank" rel="noreferrer">
         <img src={NoteTaker} alt="notetaker"/>
        </a>
        <a href="https://cellopudding.github.io/Module05-Challenge/" target="_blank" rel="noreferrer">
         <img src={Scheduler} alt="scheduler"/>
        </a>
        <a href="https://github.com/cellopudding/Employee-Tracker-SQL" target="_blank" rel="noreferrer">
         <img src={EmployeeTracker} alt="employeetracker"/>
        </a>
        <a href="https://github.com/cellopudding/09-README-Generator-" target="_blank" rel="noreferrer">
         <img src={ReadMeGenerator} alt="readme"/>
        </a>
        <a href="https://github.com/cellopudding/Challenge18-MongoDB" target="_blank" rel="noreferrer">
         <img src={SocialMediaMongo} alt="mongo"/>
        </a>
        

        </div>

     


 </div>
    </div>
    
    </>
  )
}
