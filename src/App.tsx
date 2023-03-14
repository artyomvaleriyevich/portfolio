import { Route, Routes } from "react-router-dom"
import { Layout } from "./pages/Layout/Layout"
import './media.scss'
import './styles.scss'

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*"/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
