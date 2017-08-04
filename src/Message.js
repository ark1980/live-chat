import React from 'react';

const Message = (props) => {
    return (
        <div className="Message">
            <div className="Message-author">{props.data.author}</div>
            <div className="Message-text">{props.data.text}</div>
        </div>


    )
}

export default Message;