import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Latasha Miller</h2>
                        <img
                            src="https://cdn4.vectorstock.com/i/1000x1000/35/28/woman-avatar-isolated-faceless-female-cartoon-vector-21453528.jpg"
                            alt="avatar"
                            className="avatar img"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>I come from a background in Customer Service and Healthcare. I have a strong understanding in what the client wants, presenting issues that could be possed to the customer and clinet with strong problem solving skills to provide the best product possible.  I enjoy working with others I often find it is a great way to collaberate and prime time to learn.  I'm very driven, positive minded and pride myself on not giving up, I'm very excited to be starting a new adventure into my carerr as a Junior Developer.  </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (520)203-4684
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    latashammiller@gmail.com
                                    </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Contact;