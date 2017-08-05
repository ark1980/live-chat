import React from 'react';
import Form from './Form'
import './StyleSheet/Message.css'

const Message = (props) => {
    return (
        <div className="MessagePane">
          {props.data.map((item, i) =>
            <div className="Message">
              <p className="Message-author">{item.author}</p>
              <p className="Message-text">{item.text}</p>
            </div>
          )}
          <Form />
        </div>
    )
}

export default Message;
