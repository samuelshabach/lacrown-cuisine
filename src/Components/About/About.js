import React from 'react'
import './About.css'
import Div from '../../Hoc/Div'
import DisplayContact from '../DisplayContact/DisplayContact'

const About = () => {
        return (
                <Div>
                        <section className="margin-about container">

                                <div className="text-center m-auto">
                                        <h1 className='bg-dark text-center text-light pt-2 '>About Us</h1>
                                        <p>We are a set of skilled, creative Bakers who strive to provide excellent baked items and service in an efficient,<br /> 
                                        professional manner. The Baker will design, execute, and improve recipes, perform quality checks on ingredients and finished products,<br />
                                         use icing, glazes, fillings, and decorations to enhance item presentation, and process orders from customers. You will also greet customers,<br />
                                          answer questions, clean workstations and equipment, and perform other duties to ensure that customer needs are satisfied and the bakery
                                           is well-stocked and operating smoothly.<br />

To be a successful Baker, you should be efficient and friendly with a focus on food quality and customer satisfaction. 
You should be organized, decisive, attentive, and possess a strong understanding of baking techniques.</p>
                                </div>
                                
                        </section>
                        <DisplayContact />
                </Div>




        );



}

export default About;