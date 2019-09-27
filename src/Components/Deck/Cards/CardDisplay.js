import React, { Component } from 'react';
import CardDetails from './CardDetails';
import CardActions from './CardActions';

import { CardContents, CardOverlay, CardContent } from './style';

class CardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType: this.props.action
        }
    }

    receiveAction = (id, actionType) => {
        this.props.animateAction(id, actionType)
        this.setState({ actionType })
    }

    overlay = () => {
        return this.state.actionType ? this.state.actionType.toUpperCase() : this.props.action.toUpperCase()
    }

    render() {
        return (
            <CardContents img={this.props.stuntDouble.img} >
                <CardOverlay actionColour={this.overlay()}>{this.overlay()}</CardOverlay>
                <CardContent>
                    <CardDetails stuntDouble={this.props.stuntDouble} />
                    <CardActions id={this.props.stuntDouble.id} receiveAction={this.receiveAction} />
                </CardContent>
            </CardContents >
        );
    }
}

export default CardDisplay;