import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.css';

export default class Card extends React.PureComponent {

    render() {
        const {onCardClick} = this.props;
        let className = classNames({'card': true, 'can-click': !!onCardClick});
        let props = {
            className,
            onClick: onCardClick
        };
        return (
            <div {...props}>
                <div className='card-body'>{this.props.children}</div>
            </div>
        );
    }
}

Card.propTypes = {
    onCardClick: PropTypes.func
};