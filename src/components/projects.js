import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

     if (this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Red', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I8wm3WxZ-dtivSnyDgmKbi2KC-t3OfVTH49_isi4lScEZfiLpQ&s) center / cover'}} >Clicky Game</CardTitle>
                    <CardText>
                    With this application I've created a memory game with React by breaking up the application's UI into components, managing component state, and responding to the user events.  It render's different images, each image listens for a click event, while the application keeps track of the users score.  If the user clicks an image twice the player loses and the score resets, every time an image is clicked the images shuffle themselves. 

                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored><a href="https://blooming-crag-86328.herokuapp.com">Heroku</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#f'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                </div>
            )

        } else if(this.state.activeTab === 1) {
            return (
                <div>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHLD0RH6CDUXrs1ta7VGIvX9qwhG07A8KcPDLIEn-upgGVYvB&usqp=CAU) center / cover'}} >Bamazon</CardTitle>
                    <CardText>
                    This application is modelled as a storefront like Amazon using node.js and MySQL.  The app takes in orders from customers and removes stock from the store inventory. 

                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#f'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTviNwuXvTwl6JikrpPQWp3ojcgAbsOdFBQk6-aw_oVTE40XStj&usqp=CAU) center / cover'}} >Liri Bot</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#f'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'blue', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDPmojFDMAzhDp6edGdujiHLew7HMN4dsKpSHxIIrCsinphTzz&usqp=CAU) center / cover'}} >Burgers</CardTitle>
                <CardText>
                In this application I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). I used Node and MySQL to query and route data in the app, and Handlebars to generate your HTML. It is deployed to Heroku.
 
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored><a href="https://immense-earth-87769.herokuapp.com/">Heroku</a></Button>
                </CardActions>
                <CardMenu style={{color: '#f'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card></div>
            )
        }
    }



    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Clicky Game</Tab>
                    <Tab>Bamazon</Tab>
                    <Tab>Liri-Bot</Tab>
                    <Tab>Burgers</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
            
            </div>
        )
    }
}

export default Projects;