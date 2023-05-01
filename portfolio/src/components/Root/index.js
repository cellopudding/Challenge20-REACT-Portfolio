import React from 'react'
import {Link, Outlet, useLocation} from "react-router-dom"
// import CelloPic from "../../images/CelloPic.png"
export default function Root() {
    const location = useLocation();
  return (

    <>
   
    <div className='navbar'>
        <ul className='navwrapper'>
         <li>
            <Link to="/">
            <span>Home</span>
            </Link>
         </li>
         <li>
            <Link to="/about">
            <span>About</span>
            </Link>
         </li>
        
         <li>
            <Link to="/resume">
            <span>Resume</span>
            </Link>
         </li>
         <li>
            <Link to="/projects">
            <span>Projects</span>
            </Link>
         </li>
         <li>
            <Link to="/contact">
            <span>Contact</span>
            </Link>
         </li>
        </ul>
        </div>
      
       
  <div>
    <Outlet/>
   </div>
    
    </>
  )
}
// import React from 'react';
// import { Link, Outlet, useLocation } from "react-router-dom";
// import CelloPic from "../../images/CelloPic.png";

// export default function Root() {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   return (
//     <div style={{ backgroundImage: isHomePage ? `url(${CelloPic})` : 'none', backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", zIndex: 1 }}>


//       <div className='navbar'>
//         <ul className='navwrapper'>
//           <li>
//             <Link to="/">
//               <span>Home</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/about">
//               <span>About</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/resume">
//               <span>Resume</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects">
//               <span>Projects</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact">
//               <span>Contact</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   )
// }