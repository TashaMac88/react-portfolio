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
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I8wm3WxZ-dtivSnyDgmKbi2KC-t3OfVTH49_isi4lScEZfiLpQ&s) center / cover'}} >Clicky Game></CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#f'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
              
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I8wm3WxZ-dtivSnyDgmKbi2KC-t3OfVTH49_isi4lScEZfiLpQ&s) center / cover'}} >Clicky Game></CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#f'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I8wm3WxZ-dtivSnyDgmKbi2KC-t3OfVTH49_isi4lScEZfiLpQ&s) center / cover'}} >Clicky Game></CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
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

        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>Bamazon</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>Liri-Bot</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>Burgers</h1></div>
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