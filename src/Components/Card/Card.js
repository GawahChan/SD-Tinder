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
            removeCard: false
        }
    }

    toggleBio = () => { this.setState({ displayBio: !this.state.displayBio }) }

    action = (id, actionName) => {
        this.props.handleAction(id, actionName);

        let handleCardAnimation =
            actionName === 'liked' ? { x: 300, opacity: 0 } :
                actionName === 'disliked' ? { x: -300, opacity: 0 } :
                    actionName === 'superliked' ? { y: -300, opacity: 0 } :
                        { x: 0, y: 0 }

        this.setState({ action: actionName, removeCard: handleCardAnimation })
    }

    handleDrag = (event, info) => {
        let xPosition = info.point.x;
        let yPosition = info.point.y;

        let action =
            xPosition > 30 ? 'liked' :
                xPosition < -30 ? 'disliked' :
                    yPosition < -30 ? 'superliked' : '';

        this.setState({ action })
    }

    handleDragEnd = (event, info) => {
        let xPosition = info.point.x;
        let yPosition = info.point.y;

        return (
            xPosition > 100 ? this.action(this.props.id, 'liked') :
                xPosition < -100 ? this.action(this.props.id, 'disliked') :
                    yPosition < -100 ? this.action(this.props.id, 'superliked') : this.setState({ action: '' })
        );
    }

    render() {
        return (
            <motion.div
                className={`card ${this.state.action}`}
                style={{ 'backgroundImage': `url(${require(`../../Common/Profile/${this.props.img}.jpg`)})` }}
                key={this.props.id}
                whileTap={{ scale: 0.9 }}
                drag
                dragElastic={0.5}
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                onDrag={(event, info) => this.handleDrag(event, info)}
                onDragEnd={(event, info) => this.handleDragEnd(event, info)}
                animate={this.state.removeCard}
            >
                <div className={`display-action ${this.state.action}`}>
                    <h1>{this.state.action.toUpperCase()}</h1>
                </div>
                <div className='card-content'>
                    <h1>{this.props.name}, {this.props.age}</h1>
                    <div className='card-subtitle'>
                        <p>{this.props.location}</p>
                        <motion.button onTap={this.toggleBio}>
                            <img src={Info} alt='Info' />
                        </motion.button>
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
            </motion.div >
        );
    }
}

export default Card;