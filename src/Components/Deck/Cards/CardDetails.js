import React, { Component } from 'react';
import { CardTitle, CardSubtitle, CardInfoButton } from './style';

class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { displayBio: false }
    }

    toggleBio = () => this.setState({ displayBio: !this.state.displayBio })

    render() {
        const { stuntDouble } = this.props;
        return (
            <div>
                <CardTitle>
                    {stuntDouble.name}, {stuntDouble.age}
                </CardTitle>
                <CardSubtitle>
                    {stuntDouble.location}
                    <CardInfoButton onTap={this.toggleBio} />
                </CardSubtitle>
                {this.state.displayBio && <p>{stuntDouble.bio}</p>}
            </div >
        );
    }
}

export default CardDetails;