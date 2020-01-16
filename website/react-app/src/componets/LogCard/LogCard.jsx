import React, { Component } from 'react';
import {withStyles, Card, CardContent, CardHeader} from '@material-ui/core';
import {DirectionsRun, DirectionsBike} from '@material-ui/icons';

const styles = theme => ({
    ...theme.cardStyle
});
class LogCard extends Component {

    constructor(props){
        super(props); 
        console.log(this.props.logDetailsProps);
        this.state ={
            log: this.props.logDetailsProps
        };
        console.log(this.state.log)
 
        if(this.props.logDetailsProps){
            console.log(this.props.logDetailsProps);

        } else {
            console.log("No props were passed into the log card")
        }



    }

    componentDidMount(){

        this.setState(state => ({
            
        }));
    }


    render() {

        const {
            classes
        } = this.props;

        return(
            <Card className={classes.card}>
                <CardHeader title={this.state.log.title}></CardHeader>
        <CardContent contentEditable><DirectionsBike/><DirectionsRun/>{this.state.log.author}</CardContent>

            </Card>
        );
    }
}

export default withStyles(styles)(LogCard);


