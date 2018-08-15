import React, {Fragment} from 'react';
import classNames from 'classnames';
import './message.css';
import ApiService from "utils/ApiService";
import Avatar from "components/Avatar/Avatar";

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

function MessageItem({message, currentUserId}) {
    return <div className="es-message-item">
        <div className={classNames("es-base-message-box",
            "cursor-pointer",
            {'es-message-alt': message.from === currentUserId})}>
            <Avatar width={30} height={30} defaultUrl={require('images/user-default.png')}/>
            <div className="es-message-body">
                {message.type === 1 ?
                    <div>{message.content}</div> :
                    <div><img src={message.attachment} style={{maxHeight: '150px', maxWidth: '150px'}}/></div>
                }
            </div>
        </div>
    </div>
}

/*

<div className="es-message-item">
                <div className="es-base-message-box cursor-pointer" class1="{'es-message-alt':message.userId===userId}">
                    <div className="es-avatar" style="width: 30px; height: 30px; min-width: 30px; min-height: 30px;">
                        <img src="https://static.jk.cn/T1UoYTByhT1RCvBVdK.jpg" className="es-avatar-img"/>
                    </div>
                    <div className="es-message-body">
                        <div>https://static.jk.cn/T1UoYTByhT1RCvBVdK.jpg</div>
                    </div>
                </div>
            </div>

 */