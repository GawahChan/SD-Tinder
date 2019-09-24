import React, { Component } from 'react';
import Dislike from '../../Common/Icons/Dislike.svg';
import Superlike from '../../Common/Icons/SuperLike.svg';
import Like from '../../Common/Icons/Like.svg';
import Info from '../../Common/Icons/info.svg';

import { motion } from 'framer-motion';

import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBio: false,
            action: "",
        }
    }

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    action = (id, actionName) => {
        this.props.handleAction(id, actionName);

        this.setState({ action: actionName })
    }

    render() {
        return (
            <motion.div
                className={`card ${this.state.action}`}
                style={{ 'backgroundImage': `url(${require(`../../Common/Profile/${this.props.img}.jpg`)})` }}
                key={this.props.id}
                drag
                dragElastic={0.5}
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                onDrag={
                    (event, info) => {
                        if (info.point.x > 40) this.setState({ action: 'liked' })
                        else if (info.point.x < -40) this.setState({ action: 'disliked' })
                        else if (info.point.y < -40) this.setState({ action: 'superliked' })
                        else this.setState({ action: '' })
                    }
                }
                onDragEnd={
                    (event, info) => {
                        if (info.point.x > 130) this.action(this.props.id, 'liked')
                        else if (info.point.x < -130) this.action(this.props.id, 'disliked')
                        else if (info.point.y < -130) this.action(this.props.id, 'superliked')
                        else this.setState({ action: '' })
                    }
                }
            >
                <div className='card-content'>
                    <h1>{this.props.name}, {this.props.age}</h1>
                    <div className='card-subtitle'>
                        <p>{this.props.location}</p>
                        <button onClick={this.toggleBio}>
                            <img src={Info} alt='Info' />
                        </button>
                    </div>
                    {
                        this.state.displayBio &&
                        <div className='card-bio'>
                            <p>{this.props.bio}</p>
                        </div>
                    }
                    <div className='card-actions'>
                        <button className='disliked' onClick={(e) => this.action(this.props.id, e.currentTarget.className)}>
                            <img src={Dislike} alt='Dislike' />
                        </button>
                        <button className='superliked' onClick={(e) => this.action(this.props.id, e.currentTarget.className)}>
                            <img src={Superlike} alt='Superlike' />
                        </button>
                        <button className='liked' onClick={(e) => this.action(this.props.id, e.currentTarget.className)}>
                            <img src={Like} alt='Like' />
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }
}

export default Card;