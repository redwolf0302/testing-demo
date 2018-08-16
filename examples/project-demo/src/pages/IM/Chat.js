import React, {Fragment} from 'react';
import './message.css';
import ApiService from "utils/ApiService";
import MessageItem from "./MessageItem";

export default class Chat extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            messages: []
        }
    }

    componentWillMount() {
        const {match: {params: {userId, friendId}}} = this.props;
        ApiService(`/im/messages/${userId}/${friendId}`)
            .then(({data: messages}) => {
                this.setState({messages});
            });
    }

    render() {
        const {match: {params: {userId}}} = this.props;
        const {messages} = this.state;
        return <Fragment>
            {messages.map(message => <MessageItem message={message} currentUserId={parseInt(userId)}
                                                  key={message.id}/>)}
        </Fragment>;
    }
}