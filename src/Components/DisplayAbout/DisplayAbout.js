import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './DisplayAbout.css'
import Div from '../../Hoc/Div'
import img1 from '../../assets/Designs/Img20.jpg'
import img2 from '../../assets/Designs/Img21.jpg'
import img3 from '../../assets/Designs/Img26.jpg'
import img4 from '../../assets/Designs/Img23.jpg'

const DisplayAbout = () => {
    return (
        <Div>
            <section className="container m-auto py-4 text-center" id="about">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <h1 className="p-4 m-2"> About Us</h1 >
                        <p>We are a Fashion school for Nigerians, that offer a Basic and Intermediate and Advanced Fashion training program for Youths, School leavers, Graduates, Workers/Executives and Retirees. A serious young student with potential may need special help acquiring a skill for future use.</p>
                        <Link to="/About" className="p-2 btn btn-md">Learn More<i className="fa fa-chevron-down ml-2"></i></Link>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <h1 className="p-4 m-2 card-header">Gallery</h1>
                        <div id="carouselControl" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="m-auto card">
                                        <div className="card-body">
                                            <img className="img-thumbnail" src={img1} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="m-auto card">
                                        <div className="card-body">
                                            <img className="img-thumbnail" src={img2} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">

                                    <div className="m-auto card">
                                        <div className="card-body">
                                            <img className="img-thumbnail" src={img3} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">

                                    <div className="m-auto card">
                                        <div className="card-body">
                                            <img className="img-thumbnail" src={img4} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselControl" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon btn-dark bg-dark" arial-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselControl" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon btn-dark bg-dark" arial-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <Link to="/Designs" className="m-2 btn btn-md">View More<i className="fa fa-chevron-down ml-2"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Switch>
                <Route path="/About" component={DisplayAbout} />
                <Route path="/Designs" component={DisplayAbout} />
            </Switch>
        </Div>



    );

}
export default DisplayAbout;