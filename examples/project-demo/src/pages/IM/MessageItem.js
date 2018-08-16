import classNames from "classnames";
import React from "react";
import Avatar from "components/Avatar/Avatar";

export default function MessageItem({message, currentUserId}) {
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