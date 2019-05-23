import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import './DisplayCourses.css'
import Div from '../../Hoc/Div'

const DisplayCourses =()=>{
return(
<Div> 
<section className="container m-auto text-center py-4" id="courses">
        <h1>Our Courses</h1>
        <div className="row">
        <div className="m-auto col-sm-12 col-md-6 col-lg-4">
        <div className="m-auto py-4 card text-center w-75">
        <div className="card-body" id="body">
        <h2 className="font-weight-bold">Basic Program</h2>
        <p>The basic course runs for three months. This is the most important of all courses because its the foundation.
        Courses Includes:</p>
        <Link to="/Courses" className="p-2 btn btn-md">Learn More<i className="fa fa-chevron-down ml-2"></i></Link>
        </div>
        </div>
        </div>
            <div className="m-auto col-sm-12 col-md-6 col-lg-4">
            <div className="m-auto py-4 card text-center w-75">
        <div className="card-body" id="body">
        <h2 className="font-weight-bold">Intermediate Program</h2>
        <p>The Intermediate course runs for three months. This is another very important stage of the courses.
        Courses Includes:</p>
        <Link to="/Courses" className="p-2 btn btn-md">Learn More<i className="fa fa-chevron-down ml-2"></i></Link>
        </div>
        </div>
        </div>
            <div className="m-auto col-sm-12 col-md-6 col-lg-4">
        <div className="m-auto py-4 card text-center w-75">
            <div className="card-body" id="body">
                <h2 className="font-weight-bold">Advance Program</h2>
                <p>The Advance course runs for three months. This is the where professionalism is engaged at its peak. 
                Courses Includes:</p>
                <Link to="/Courses" className="p-2 btn btn-md">Learn More<i className="fa fa-chevron-down ml-2"></i></Link>
            </div>
        </div>
        </div>
            </div>
        </section>
        <Switch>
            <Route exact path="/" components={DisplayCourses}/>
            <Route path="/" components={DisplayCourses} />
            <Route path="/" components={DisplayCourses} />
        </Switch>
</Div>


);

}

export default DisplayCourses;