import React, { useEffect } from 'react'
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomSentence } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    // polling after every 2s
    const timer = setInterval(() => {
      dispatch(
        addChatMessage({
          name: generateRandomName(),
          message: generateRandomSentence(),
        })
      );
    }, 2000);
    // clearing 
    return () => {
      clearInterval(timer);
    }
    
  },[])
  return (
    <>
      <div>
        {chatMessages.map((c, i) => {
          return <Chat key={i} name={c.name} message={c.message} />;
        })}
      </div>
      
    </>
  );
}

export default LiveChat