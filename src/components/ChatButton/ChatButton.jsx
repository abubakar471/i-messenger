import "./ChatButton.css"
import React, { useState } from 'react'
import MainApp from '../MainApp/MainApp';
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { IconButton } from '@mui/material';

const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='chat-open-btn'>
                {
                    !isOpen ? (
                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                            <IoChatbubblesOutline size={30} color='white' />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                            <MdOutlineCloseFullscreen size={30} color='white' />
                        </IconButton>
                    )
                }
            </div>

            {
                isOpen && (
                    <MainApp />
                )
            }
        </div>
    )
}

export default ChatButton
