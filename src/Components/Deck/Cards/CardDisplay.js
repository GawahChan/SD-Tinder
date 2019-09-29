import React, { Component } from 'react';
import CardDetails from './CardDetails';
import CardActions from './CardActions';

import { CardContents, CardOverlay, CardContent } from './style';

class CardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType: ''
        }
    }

    receiveAction = (id, actionType) => {
        this.props.animateAction(id, actionType)
        this.setState({ actionType })
    }


    render() {
        const overlay = this.state.actionType ? this.state.actionType.toUpperCase() : this.props.action.toUpperCase();

        return (
            <CardContents actionColour={overlay} img={this.props.stuntDouble.img} >
                <CardOverlay actionColour={overlay}>{overlay}</CardOverlay>
                <CardContent>
                    <CardDetails stuntDouble={this.props.stuntDouble} />
                    <CardActions id={this.props.stuntDouble.id} receiveAction={this.receiveAction} />
                </CardContent>
            </CardContents >
        );
    }
}

export default CardDisplay;