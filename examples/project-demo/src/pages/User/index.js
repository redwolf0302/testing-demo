import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "utils/ApiService";
import Avatar from "components/Avatar/Avatar";
import Card from "components/Card/Card";


export default class User extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: {}
        }
    }

    doLoadUser(userId) {
        ApiService(`user/${userId}`)
            .then(({data: user}) => {
                this.setState({user});
            })
    }

    componentWillMount() {
        const {match: {params: {userId}}} = this.props;
        this.doLoadUser(userId)
    }

    //
    // componentWillUpdate() {
    //     const {match: {params: {userId}}} = this.props;
    //     this.doLoadUser(userId)
    // }

    render() {
        const {user} = this.state;
        return (
            <Fragment>
                <Card>
                    <Avatar imageUrl={user.avatar}
                            width={64}
                            height={64}
                            defaultUrl={require('images/user-default.png')}/>
                </Card>
                <Link className='btn' to={'/im/friends/123'}>Friend#123</Link>
                <Link className='btn' to={'/im/chat/123/123'}>Chat#123#123</Link>
                <div className="box effect2">
                    <h3>Effect 2</h3>
                </div>
            </Fragment>
        );
    }
}