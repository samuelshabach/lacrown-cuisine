import React from 'react'
import './Designs.css'
import DisplayContact from '../DisplayContact/DisplayContact'
import Div from '../../Hoc/Div'

import i1 from '../../assets/Designs/i1.jpg'
import i2 from '../../assets/Designs/i2.jpg'
import i3 from '../../assets/Designs/i3.jpg'
import i4 from '../../assets/Designs/i4.jpg'
import i5 from '../../assets/Designs/i5.jpg'
import i6 from '../../assets/Designs/i6.jpg'
import i7 from '../../assets/Designs/i7.jpg'
import i8 from '../../assets/Designs/i8.jpg'
import i9 from '../../assets/Designs/i9.jpg'
import Img from '../Img/Img'
const Designs = () => {
    return (
        <Div>
            <section className="margin-design container">
                <h1 className="bg-dark text-center text-light pt-2">Products</h1>
                <div className="container">
                    <div className="row">
                        <Img img={i1} />
                        <Img img={i2} />
                        <Img img={i3} />
                        <Img img={i4} />
                        <Img img={i5} />
                        <Img img={i6} />
                        <Img img={i7} />
                        <Img img={i8} />
                        <Img img={i9} />
                    </div>
                </div>
            </section>
            <DisplayContact />
        </Div>
    );
}
export default Designs;