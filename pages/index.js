import React,{useEffect, useState, useContext} from "react";
import { NavBar } from "../Components";

//internal import
import { ChatAppContext } from "../Context/ChatAppContext";
const ChatApp = () => {

  const {} = useContext(ChatAppContext);
  return <>
    <NavBar></NavBar>
  </>;
};

export default ChatApp;
 