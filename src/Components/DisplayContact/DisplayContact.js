import React from 'react'
import './DisplayContact.css'
import Div from '../../Hoc/Div'
const Contact = () => {
    return (
        <Div>
            <section className="m-auto pt-4 text-center text-light" id="contact">
                <h1 id='bff'>CONTACT US</h1>
                <p> Zone B, Block 15, Shop 8,</p>
                <p> OAU Central Market,</p>
                <p> OAU, Ile-Ife </p>
                <p>Tel: 09086463815</p>
                <a href="http://instagram.com"><span className="m-2"><i className="circle ig fab fa-instagram"></i></span></a>
                <a href="https://wa.me"><span className="m-2"><i className="circle wh fab fa-whatsapp"></i></span></a>
                <a href="https://twitter.com"><span className="m-2"><i className="circle tw fab fa-twitter"></i></span></a>
                <div><i className="m-2 em fas fa-envelope circle"></i><span>opeyemishabach@gmail.com</span></div>
            <p className="pt-4">Copyright(2019) &copy; Samuel Adebayo</p>
                </section>
    </Div>



    );

}

export default Contact;