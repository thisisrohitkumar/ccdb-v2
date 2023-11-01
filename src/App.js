import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Courses from './views/Courses'
import CoursesDetails from './views/CourseDetails'
import Instructors from './views/Instructors'
import Team from './views/Team'
import Login from './views/Login'
import Privacy from './views/Privacy'
import Error404 from './views/Error404'
import './stylesheets/app.css'

const App = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/courses' element={<Courses />} />
                <Route exact path='/courses-details' element={<CoursesDetails />} />
                <Route exact path='/team' element={<Team />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/instructors' element={<Instructors />} />
                <Route exact path='/privacy' element={<Privacy />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </Router>
    )
}

export default App;
