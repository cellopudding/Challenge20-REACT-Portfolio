// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import About from "./components/About"
// import Contact from "./components/Contact"
// import Projects from "./components/Projects"
// import Resume from "./components/Resume"
// import Root from "./components/Root";
// import Home from "./components/Home";



// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root/>}>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/resume" element={<Resume/>}/>
//       <Route path="/projects" element={<Projects/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/Home" element={<Home/>}/>
    
//       </Route>
//     )
//   )
//   return (
//     <>
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//     </>
//   );
// }

// export default App;
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Root from "./components/Root";
import Home from './components/Home';
import Footer from "./components/Footer"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
         <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       
      </Route>
    )
  );
  return (
    <>
      <div>
        <RouterProvider router={router} />
        <Footer/>

      </div>
    </>
  );
}

export default App;
