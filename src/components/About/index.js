import React from 'react'
import AboutImage from "../../images/lonnieaboutme.png"
import "./about.css"
export default function About() {
  return (
    <>
     <div class="about">
      {/* here i smy coommnet */}
        <h1 class ="headings">ABOUT ME</h1>
        <div class="aboutmewrapper">
        <img id="pic" src={AboutImage} alt="about me pic"/>
          </div>
        <div id="bio">
            
            <p>Up until the Spring of 2020 I spent my professional career as a cellist with a wide-ranging background. One week I'd be performing with an orchestra
                and the next I might be on the road with a national touring act. I enjoyed this creative blend and the constant challange of maintaining my craft. As a 
                current student in the world of coding I find the same kind of exciting challenges. This page is meant to display a snapshot of my current projects and 
                a way for me to exercise new skills. If you have questions, feedback, or inquires, please reach out to me thorugh the contact page! </p>
        </div>
        </div>
        
        
    
    </>
  )
}
