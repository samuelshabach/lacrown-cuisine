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
                    <Link className="navbar-brand" id="toggle" to="/">la'crown</Link>
                    <button className="navbar-toggler" id="toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="navbar-toggler-icon" id="icon"></span>
                    </button>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/">Home<span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Designs">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Contact">Contact</Link>
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