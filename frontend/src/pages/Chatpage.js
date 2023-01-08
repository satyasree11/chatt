import React,{useEffect} from 'react';
import axios from 'axios';

const Chatpage = () => {
    const fetchChats = async () => {
        const data = await axios.get("/api/chats");
        console.log(data);
    };
    useEffect(() => {
        fetchChats();
      },[]);
  return (
    <div>
      Chat page
    </div>
  );
}

export default Chatpage;
