import React from 'react'
import './Home.css'
import Div from '../../Hoc/Div'
import DisplayAbout from '../DisplayAbout/DisplayAbout'
import DisplayContact from '../DisplayContact/DisplayContact'

const Home = () => {
    return (
        <Div>
            <section className="container-fluid dark-overlay Home" id="Home">
               
            </section>
            <DisplayAbout />
            <DisplayContact />
        </Div>



    );


}

export default Home;