import React from 'react'
import Home from '../Home/Home'
import Courses from '../Courses/Courses'
import Designs from '../Designs/Designs'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Div from '../../Hoc/Div'
import { Route, Link, Switch } from 'react-router-dom'
import './Navbar.css'
import img1 from '../../assets/Images/Logo.jpg'

const Navbar = () => {
    return (
        <Div>
            <section className="container">
                <nav className="pl-5 pr-5 navbar fixed-top navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" id="toggle" to="/"><img className="logo rounded-circle m-auto" src={img1} alt="logo" /></Link>
                    <button className="navbar-toggler" id="toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="navbar-toggler-icon" id="icon"></span>
                    </button>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/"><i className="fa fa-home mr-2"></i>Home<span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#Courses" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-archive mr-2"></i>Our Courses</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/Courses">Basic Program</Link>
                                    <Link className="dropdown-item" to="/Courses">Intermediate Program</Link>
                                    <Link className="dropdown-item" to="/Courses">Advance Program</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Designs"><i className="fas fa-image mr-2"></i>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About"><i className="fas fa-question mr-2"></i>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact"><i className="fas fa-phone mr-2"></i>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/Courses" component={Courses} />
                <Route path="/Courses" component={Courses} />
                <Route path="/Designs" component={Designs} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />

            </Switch>
        </Div>
    );

}

export default Navbar;