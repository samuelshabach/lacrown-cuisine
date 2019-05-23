import React from 'react'
import './Home.css'
import Div from '../../Hoc/Div'
import DisplayCourses from '../DisplayCourses/DisplayCourses'
import DisplayAbout from '../DisplayAbout/DisplayAbout'
import DisplayContact from '../DisplayContact/DisplayContact'

const Home = () => {
    return (
        <Div>
            <section className="container-fluid dark-overlay Home" id="Home">
                <h1 id="pecu" className="font-weight-bold">NEMI SCHOOL OF DESIGN</h1>
                <p>Fashion Is Our Culture</p>
                <p>Welcome to NEMI Fashion School, its nice to have you around and we can't wait to take you through series of great things!!!</p>
                <a className="btn btn-md font-weight-bold waves-effect pl-4 pt-2 pb-2 pr-4" href="/Courses">Learn More<i className="fa fa-chevron-down ml-2"></i></a>
            </section>
            <DisplayCourses />
            <DisplayAbout />
            <DisplayContact />
        </Div>



    );


}

export default Home;