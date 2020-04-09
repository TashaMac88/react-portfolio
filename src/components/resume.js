import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://cdn4.vectorstock.com/i/1000x1000/35/28/woman-avatar-isolated-faceless-female-cartoon-vector-21453528.jpg"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Latasha Miller</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Junior Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '5em' }} />
                        <p>My objective is to gain employment as a junior developer to continue to enhance my skills. I’m enthusiastic, willing and determined.  Having worked with varying customer backgrounds in high volume call centers I’ve learned to role with the punches and adapt quickly. I don’t crumble under pressure;  I work well independently, but enjoy working with groups to learn diverse expertise and other outlooks.  I have always been chosen to assist other co-workers to better educate them on the role and better tactics to getting the job done.
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Email</h5>
                        <p>Latashammiller@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2006}
                            endYear={2010}
                            schoolName="Pima Community College"
                            schoolDescription="Completed a liberal arts associates degree with 3.8 GPA"
                        />

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="University of Arizona"
                            schoolDescription="Completed a full stack coding course"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2010}
                            endYear={2015}
                            jobName="Oputm Rx"
                            jobDescription="Assisted Medicare Part D member and high touch clients with insurance, prescriptions and accounting questions.  Worked on the lead team handling escalated calls and answering questions from 2nd tier representatives resolving more complex customer issues.  Helpdesk training conducting too-soon-to-fill overrides, vacation supply lost and damaged for high touch clients and prior authorization team assistance. Demonstrating outstanding service to identify the source of caller’s issues while resolving the inquiry in a timely and professional manner.  Metrics always exceeded goals."
                        />

                        <Experience
                            startYear={2015}
                            endYear={2019}
                            jobName="Mckesson"
                            jobDescription="Worked with patients and health care providers to assist with prior authorization and appeal submissions.  Conducted case research to obtain product specific drug coverage and responded energetically to escalated issues in a timely manner.  Assisted with training of new hires from beginning of program launch in 2016, while being a part of the mentor program, running daily reports for management, managing daily reports of my personal case load and working closely with the client to review proper case management."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                        Skill="Javascript"
                        ListItem="Javascript">
                        </Skills>

                        <Skills
                        Skill="HTML/CSS"
                        ListItem="HTML/CSS">
                        </Skills>

                        <Skills
                        Skill="React.js"
                        ListItem="React.js">
                        </Skills>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;