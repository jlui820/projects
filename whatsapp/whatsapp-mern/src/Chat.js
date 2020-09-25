import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last see at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className='chat__message'>
          <span className="chat__name">Jeff</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        
        <p className='chat__message chat__receiver'>
          <span className="chat__name">Jeff</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input placeholder='Type a message'
            type="text" />
            <button type='submit'>Send a message </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
