import React from 'react'
import "./projects.css"
import { Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlantPetaler from "../../images/plant-petaler.png"
import QuizardImage from "../../images/Quizard.png"
import BreakingDadImage from "../../images/BreakingDad.png"

import NoteTaker from "../../images/note-taker.png"
import EmployeeTracker from "../../images/EmployeeTracker.png"
import ReadMeGenerator from "../../images/ReadMeGenerator.png"
import SocialMediaMongo from "../../images/SocialMediaMongo.png"
import Scheduler from "../../images/Scheduler.png"

// export default function Projects() {
//   return (
//     <>
//     <div id="work">
//       <h1 class="headings">PROJECTS</h1>
//       <h3>Feel free to check out some of my current and most recent projects!</h3>
//       <div class="gallery">
//         <a href="https://warm-shore-84336.herokuapp.com/" target="_blank" rel="noreferrer">
//         <img src={QuizardImage} alt="Quizard"/>
//         </a>
//         <a href="https://cellopudding.github.io/BreakingDad/" target="_blank" rel="noreferrer">
//          <img src={BreakingDadImage} alt="BreakingDad"/>
//         </a>
//         <a href="https://plant-petaler.herokuapp.com/" target="_blank" rel="noreferrer">
//          <img src={PlantPetaler} alt="passwordgenerator"/> 
//         </a>
//         <a href="https://github.com/cellopudding/Lets-Take-Notes-Module11-Challenge" target="_blank" rel="noreferrer">
//          <img src={NoteTaker} alt="notetaker"/>
//         </a>
//         <a href="https://cellopudding.github.io/Module05-Challenge/" target="_blank" rel="noreferrer">
//          <img src={Scheduler} alt="scheduler"/>
//         </a>
//         <a href="https://github.com/cellopudding/Employee-Tracker-SQL" target="_blank" rel="noreferrer">
//          <img src={EmployeeTracker} alt="employeetracker"/>
//         </a>
//         <a href="https://github.com/cellopudding/09-README-Generator-" target="_blank" rel="noreferrer">
//          <img src={ReadMeGenerator} alt="readme"/>
//         </a>
//         <a href="https://github.com/cellopudding/Challenge18-MongoDB" target="_blank" rel="noreferrer">
//          <img src={SocialMediaMongo} alt="mongo"></img> 
//         </a>
        

//         </div>

     


//  </div>
//     {/* </div> */}
    
//     </>
//   )
// }
export default function Projects() {
  const projectData = [
    {
      title: "Quizard",
      description: "A quiz application.",
      image: QuizardImage,
      repo: "https://github.com/cellopudding/Quizard",
      link: "https://warm-shore-84336.herokuapp.com/"
      
    },
    {
      title: "Breaking Dad",
      description: "Dad jokes and Breaking Bad quotes.",
      image: BreakingDadImage,
      repo: "https://github.com/cellopudding/BreakingDad",
      link: "https://cellopudding.github.io/BreakingDad/"
    },
    
    {
      title: "Plant Petaler",
      description: "E-Commerce nursery.",
      image: PlantPetaler,
      repo: "https://github.com/cellopudding/Plant-Petaler",
      link: "https://plant-petaler.herokuapp.com/"
    },
    {
      title: "Note Taker",
      description: "An application for taking and organizing notes.",
      image: NoteTaker,
      repo: "https://github.com/cellopudding/Lets-Take-Notes",
      link: "https://github.com/cellopudding/Lets-Take-Notes-Module11-Challenge"
    },
    {
      title: "Employee Tracker",
      description: "A command-line app for managing employees.",
      image: EmployeeTracker,
      repo: "https://github.com/cellopudding/Employee-Tracker-SQL",
      link: "https://github.com/cellopudding/Employee-Tracker-SQL"
    },
    {
      title: "ReadMe Generator",
      description: "A command-line README generator.",
      image: ReadMeGenerator,
      repo: "https://github.com/cellopudding/README-Generator-",
      link: "https://github.com/cellopudding/09-README-Generator-"
    },
    {
      title: "Social Media Mongo",
      description: "A social media application using MongoDB.",
      image: SocialMediaMongo,
      repo: "https://github.com/cellopudding/MongoDB-Social-Network",
      link: "https://github.com/cellopudding/Challenge18-MongoDB"
    },
    {
      title: "Scheduler",
      description: "A web-based scheduling application.",
      image: Scheduler,
      repo: "https://github.com/cellopudding/Scheduler",
      link: "https://cellopudding.github.io/Module05-Challenge/"
    },
  ];
//   return (
  
//     <div id="work">
//       <h1 className="headings">PROJECTS</h1>
//       <h3>Feel free to check out some of my current and most recent projects!</h3>
//       <Row className="gallery">
//         {projectData.map((project, index) => (
//           <Col key={index} sm={12} md={6} lg={4} xl={3}>
//             <Card>
//               <a href={project.link} target="_blank" rel="noreferrer">
//                 <Card.Img src={project.image} alt={project.title} />
//               </a>
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
  
//   )
// }
return (
  <>
  <div id="work">
    <h1 className="headings">PROJECTS</h1>
    <h3 className="h3">Feel free to check out some of my current and most recent projects</h3>
    <Row className="gallery">
      {projectData.map((project, index) => (
         <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <Card bg="secondary" text="white" className="project-card">
            <a href={project.link} target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </a>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button href={project.repo} variant="primary">Repo</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  </>
  
);

}



