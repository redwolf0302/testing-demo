import React from 'react';
import './Card.css';

export default class Card extends React.PureComponent {

    render() {
        return (
            <div className='box card'>
                {this.props.children}
            </div>
        );
    }
}

Card.propTypes = {};