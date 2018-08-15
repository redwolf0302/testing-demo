import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Card from "components/Card/Card";
import Avatar from "components/Avatar/Avatar";

export default class UserCard extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {user, onUserCardClick} = this.props;
        return (
            <Card onCardClick={onUserCardClick ? () => {
                onUserCardClick(user)
            } : null}>
                <Fragment>
                    <Avatar imageUrl={user.avatar}
                            width={64}
                            height={64}
                            cls={'icon'}
                            defaultUrl={require('images/user-default.png')}/>
                    <div className='content'>
                        <h3>{user.name}</h3>
                        <p>{user.gender === 'M' ? '男' : '女'} {user.age}岁</p>
                        <p>简介：{user.description}</p>
                    </div>
                </Fragment>
            </Card>
        );
    }
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
    onUserCardClick: PropTypes.func
};

