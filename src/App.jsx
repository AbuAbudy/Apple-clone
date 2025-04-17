
import "./css/bootstrap.css"
import "./css/styles.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Alerto from "./Components/Alerto"
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"
import Section3 from "./Components/Section3"
import Section4 from "./Components/Section4"
import Section5 from "./Components/Section5"
import Section6 from "./Components/Section6"
import AppleVideos from "./Components/AppleVideos"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {

  return (
    <>
    <BrowserRouter>
    <div>
 <Header />
 < Alerto />
 <Section1 />
 <Section2 />
 <Section3 />
 <Section4 />
 <Section5/>
 <Section6 />
<AppleVideos />
<Footer />
 
</div>
    </BrowserRouter>

 </>
  )
} 

export default App
