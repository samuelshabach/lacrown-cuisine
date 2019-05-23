import React from 'react'
import './DisplayContact.css'
import Div from '../../Hoc/Div'
const Contact = () => {
    return (
        <Div>
            <section className="m-auto pt-4 text-center" id="contact">
                <h1>CONTACT US</h1>
                <p> Zone B, Block 15, Shop 8,</p>
                <p> OAU Central Market,</p>
                <p> OAU, Ile-Ife </p>
                <p>Tel: 08020717830</p>
                <a href="http://instagram.com/nemi_design"><span className="m-2"><i className="circle ig fab fa-instagram"></i></span></a>
                <a href="https://wa.me/2348020717830/"><span className="m-2"><i className="circle wh fab fa-whatsapp"></i></span></a>
                <a href="https://twitter.com/nsholaye"><span className="m-2"><i className="circle tw fab fa-twitter"></i></span></a>
                <div><i className="m-2 em fas fa-envelope circle"></i><span>sholayenemi@yahoo.com</span></div>
            <p className="pt-4">Copyright(2019) &copy; NEMI Design&trade;</p>
                </section>
    </Div>



    );

}

export default Contact;