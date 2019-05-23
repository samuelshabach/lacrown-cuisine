import React from 'react'
import './Contact.css'
import Div from '../../Hoc/Div'
import DisplayContact from '../DisplayContact/DisplayContact'
const Contact =()=>{
return (
    <Div>
        <section className="margin-contact text-center container">
            <h1 id="bg-contact">CONTACT US</h1>
            <p>For more enquires on our services, courses and any other needs, you can reach us on all our social media handles or give us a direct call.</p>
            <p>You can also visit us at our office:</p>
            <p>Zone B, Block 15, Shop 8, OAU Central Market, OAU, ILE-IFE.</p>
            <p>Description: From Badejoko Bookstore, walk straight down to block 15.</p>
            <p>Tel: 08020717830</p>            
        </section>
    <DisplayContact/>
    </Div>
        


);

}

export default Contact;