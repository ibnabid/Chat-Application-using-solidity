import React, {useEffect, useState, useContext} from "react";
import Image from "next/image";
import Link from "next/link";



//Internal Import
import Style from './NavBar.module.css';
import {ChatAppContext} from '../../Context/ChatAppContext';
import {Model, Error} from "../index";
import images from '../../assets';




const NavBar = () => { 
  const menuItems = [
    {
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "CHAT",
      link: "/",
    },
    {
      menu: "SETTING",
      link: "/",
    },
    {
      menu: "FAQS",
      link: "/",
    },
    {
      menu: "TERMS OF USE",
      link: "/",
    },
  ] 


  //USESTATE
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const {account, userName, connectWallet}= useContext(ChatAppContext);
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
          <div className={Style.NavBar_box_left}>
            <image src={images.logo} alt="Logo" width={50} height={50} />
          </div>
          <div className={Style.NavBar_box_right}>
            <div className={Style.NavBar_box_right_menu}>
              {menuItems.map((el, i)=>(
                <div onClick={()=> setActive(i+1)} key={i+1} className={`${
                  Style.NavBar_box_right_menu} ${active == i+1 ?
                  Style.active: }`}></div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
  
};

export default NavBar;
