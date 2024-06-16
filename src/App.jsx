import { Routes, Route } from 'react-router-dom'

// components
import NavbarComponent from "./components/Navbar"
import FooterComponent from "./components/Footer"

// pages
import HomePage from "./pages/HomePage"
import SeasonPage from "./pages/SeasonPage"
import StoryPage from "./pages/StoryPage"
import News from "./pages/TestimonialPage"

// style
import './App.css'

function App() {
    return <div>
        <NavbarComponent/>
        <div className="max-w-6xl mx-auto pt-20 px-6">
        <Routes>
            <Route path='/' Component={HomePage}></Route>
            <Route path='/season' Component={SeasonPage}></Route>
            <Route path='/story' Component={StoryPage}></Route>
            <Route path='/news' Component={News}></Route>
        </Routes>
        <FooterComponent/>
        </div>
    </div>
}

export default App
