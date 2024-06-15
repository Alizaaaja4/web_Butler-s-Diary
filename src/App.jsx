import { Routes, Route } from 'react-router-dom'

// components
import NavbarComponent from "./components/Navbar"
import FooterComponent from "./components/Footer"

// pages
import HomePage from "./pages/HomePage"
import SeasonPage from "./pages/SeasonPage"
import StoryPage from "./pages/StoryPage"
import FaqPage from "./pages/FaqPage"
import Testimonial from "./pages/TestimonialPage"

// style
import './App.css'

function App() {
    return <div>
        <NavbarComponent/>
        <div className="max-w-6xl mx-auto pt-20 px-6">
        <Routes>
            <Route path='/' Component={HomePage}></Route>
            <Route path='/Season' Component={SeasonPage}></Route>
            <Route path='/Story' Component={StoryPage}></Route>
            <Route path='/Faq' Component={FaqPage}></Route>
            <Route path='/Testimonials' Component={Testimonial}></Route>
        </Routes>
        <FooterComponent/>
        </div>
    </div>
}

export default App
