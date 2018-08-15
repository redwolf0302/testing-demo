import React from 'react';
import './Card.css';

export default class Card extends React.PureComponent {

    render() {
        return (
            <div className='box card'>
                <div className='card-body'>{this.props.children}</div>
            </div>
        );
    }
}

Card.propTypes = {};