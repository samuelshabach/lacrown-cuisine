import React from 'react'
import './DisplayCourses.css'
import Div from '../../Hoc/Div'
import Card from '../Card/Card'

const DisplayCourses = () => {
    return (
        <Div>
            <section className="container m-auto text-center py-4" id="courses">
                <h1>Our Courses</h1>
                <div className="row">
                    <Card link="/Courses">
                        <h2 className="font-weight-bold">Basic Program</h2>
                        <p>The basic course runs for three months. This is the most important of all courses because its the foundation.
                    Courses Includes:</p>
                    </Card>
                    <Card link="/Courses">
                        <h2 className="font-weight-bold">Intermediate Program</h2>
                        <p>The Intermediate course runs for three months. This is another very important stage of the courses.
                    Courses Includes:</p>
                    </Card>
                    <Card link="/Courses">
                        <h2 className="font-weight-bold">Advanced Program</h2>
                        <p>The Advance course runs for three months. This is the where professionalism is engaged at its peak.
                    Courses Includes:</p>

                    </Card>
                </div>
            </section>
        </Div>


    );

}

export default DisplayCourses;