import React from 'react'
import './About.css'
import Div from '../../Hoc/Div'
import DisplayContact from '../DisplayContact/DisplayContact'

const About = () => {
        return (
                <Div>
                        <section className="margin-about container">

                                <div className="text-center m-auto">
                                        <h1 id="bg-about">About Us</h1>
                                        <p>We are a Fashion school for Nigerians, that offer a Basic and Intermediate and Advanced Fashion training program for Youths, School leavers, Graduates, Workers/Executives and Retirees. A serious young student with potential may need special help acquiring a skill for future use. A retired 60 year-old woman may be seeking a fun way to fill up an otherwise empty day or a skill to make ends meet after retirement. A stress-ridden executive may be seeking solace and relaxation or simply a skill that will empower him/her for a career switch.</p>
                                        <p>NEMI school of design strives to steer students to a defined design and fashion profile. We look out for talented, intelligent, ambitious students who are prepared to put their best efforts to build a fulfilling career. We look out for people with all-round abilities who show the energy, the potential and the commitment to be the industry captains of tomorrow. So when we are assessing you, we will be particularly evaluating your career focus, your creative and aesthetic sense, your level of commitment and energy, your potential as a team member, your ability to handle stress, and of course your communication skills.</p>
                                        <p>Nemi School of Design offers the most comprehensive education programs in the fashion industry. Review the content of all subjects along with the sample lessons. Be sure to get similar course details from other schools, compare and see the difference in the quality of the syllabus.</p>
                                        <p>Sewing is not just attaching pieces of fabric together.  It is about giving life to fabric.  Our methods teach how to mould fabric from its 2-dimensional form into a 3-dimensional form to fit a body using principles that will work across different clothes you are making.</p>
                                        <p>We have two methods of teaching. The Bespoke method, also known as the freehand method, and the Pattern Drafting method.</p>
                                        <p>We teach pattern drafting from scratch as well as the free hand method.  Working with patterns have various benefits such as minimizing errors, saving fabric and proper planning.  Once you understand the principle behind pattern drafting, it can also be applied to  freehand method.</p>
                                        <p>Our unparalleled teaching methods help to launch students into the successful future they aspire.    Learning outcomes include how to properly construct various garments ranging from simple skirts to wedding dresses. Also, from fabric layout and cutting, to the proper tools you need in garment construction and how to conduct a fitting.
                                                NEMI school of design, issues Certificates at the successful completion of Course Programmes.</p>
                                        <p>In Nemi School of Design the students construct 10 ready to wear garments in the Basic program, 7 outfits in the intermediate and additional 5 Couture and Avant-garde outfits in the Advanced program. All garments are created with the learners original designs, helping them develop their signature style.</p>
                                </div>
                                <div>
                                        <h2 className="text-center m-auto py-2"><b>Why Nemi School?</b></h2>
                                        <ul>
                                                <li>EXPERIENCED INSTRUCTOR</li>
                                                <p>Leading the team is a seasoned instructor and teacher with over 11 years fashion experience who has a passion for impacting knowledge.</p>
                                                <li>100% STUDENT CONCENTRATION</li>
                                                <p>We prepare students on an individual level on both the theoretical and practical aspect of dress making that adequately equips them, and also allow them work independently in the fashion industry.</p>
                                                <li>STANDARD SYLLABUS </li>
                                                <p>We use standard syllabus for both teaching Practical sessions which keeps our students updated and well informed in the fashion industry.</p>
                                                <li>FLEXIBILE TIME SCHEDULE </li>
                                                <p>For each course, we have a very friendly schedule which allows you to do other things along side without it affecting your fashion classes.</p>
                                                <li>UNIQUE TEACHING STYLE</li>
                                                <p>This course is designed to fit your individual training needs, from three month basic, three months intermediate, and three months advance courses. </p>
                                                <li>AFFORDABLE PRICE </li>
                                                <p>We want to make sure that financial problem doesn't hold you back from learning a skill, which makes our fees affordable to all. You get more than you paid for, trust us.</p>
                                        </ul>
                                </div>
                        </section>
                        <DisplayContact />
                </Div>




        );



}

export default About;