import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import Photo from '../images/latasha.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Bootstrap | Javascript | JQuery | API's | JSON | AJAX | Heroku | Github | MySQL | MongoDB | Node.js | Express.js</p>

                            <div className="social-links">

                                {/*LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                     {/*Github */}
                                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                           
                           </div>
                        </div>
                    </Cell>
                </Grid>
                </div>
        )
    }
}

export default Landing;