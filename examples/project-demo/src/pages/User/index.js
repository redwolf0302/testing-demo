import React, {Fragment} from 'react';
import ApiService from "utils/ApiService";
import UserCard from "./components/UserCard/UserCard";


export default class User extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: {},
            friends: []
        };
        this._handleUserClicked = this._handleUserClicked.bind(this);
    }

    doLoadUser(userId) {
        ApiService(`user/${userId}`)
            .then(({data: user}) => {
                this.setState({user});
            });
    }

    doLoadFriends(userId) {
        ApiService(`im/friends/${userId}`)
            .then(({data: friends}) => {
                this.setState({friends});
            });
    }


    componentWillMount() {
        const {match: {params: {userId}}} = this.props;
        this.doLoadUser(userId);
        this.doLoadFriends(userId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            const {match: {params: {userId}}} = nextProps;
            this.doLoadUser(userId);
            this.doLoadFriends(userId);
        }
    }

    _handleUserClicked(user) {
        const {history} = this.props;
        console.log(user);
        history.push(`/user/${user.id}`);
    }

    render() {
        const {user, friends} = this.state;
        return (
            <Fragment>
                <UserCard user={user} key={user.id}/>
                <h3># 朋友们</h3>
                {friends.map(friend => <UserCard user={friend} key={friend.id}
                                                 onUserCardClick={this._handleUserClicked}/>)}
            </Fragment>
        );
    }
}