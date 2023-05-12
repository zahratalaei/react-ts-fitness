import Navbar from "@/scenes/navbar/Navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "./shared/types"
import Home from "./scenes/home/Home"
import Benefits from "./scenes/benefits/Benefits"
import OurClasses from "./scenes/ourClasses/OurClasses"
import ContactUs from "./scenes/contactUs/ContactUs"
import Footer from "./scenes/footer/Footer"

function App() {
  const[isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const[selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

useEffect(()=>{
  const handleScroll = () => {
    if(window.scrollY === 0) {
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY !== 0) setIsTopOfPage(false)
  }
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
},[])

  return (
    <div className='app bg-gray-20'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
