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
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "All Users",
      link: "alluser",
    },
  ] 
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>

      </div>
    </div>
  )
  
};

export default NavBar;
