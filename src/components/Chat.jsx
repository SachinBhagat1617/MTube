import React from 'react'

const Chat = ({name,message}) => {
  return (
    <div className="flex items-center w-full border">
      <img
        src="https://cdn-icons-png.freepik.com/256/64/64572.png"
        alt="user_icon"
        className="h-6 m-2"
      />
       <div className="flex items-center">
        <h1 className="font-bold mr-2">{name}</h1>
        <p className=" text-[15px]">{message}</p> 
      </div> 
    </div>
  );
}

export default Chat