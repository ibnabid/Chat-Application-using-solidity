import React, {useEffect, useState, useContext} from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from './Model.module.css';
import images from '../../assets';
import {ChatAppContext} from '../../Context/ChatAppContext';
import { Loader } from '../../Components/index';



const Model = ({openModel,
  title,
  head,
  info,
  smallInfo,
  image,
  functionName,
}) => {

  //USESTATE
  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress]= useState("");

  const {loading} = useContext(ChatAppContext);

  return (
  <div className={Style.Model}>
    <div className={Style.Model_box}>
      <div className={Style.Model_box_left}>
        <Image src={image} alt="Image" width={700} height={700}/>
      </div>
      <div className={Style.Model_box_right}>
        <h1>
          {title} <span>{head}</span>
        </h1>
        <p>{info}</p>
        <small>{smallInfo}</small>

        <div className={Style.Model_box_right_name}>
          <div className={Style.Model_box_right_name_info}>
            <Image src={images.username} alt="user" width={30} height={30}/>
            <input type='text' placeholder="your name" onChange={(e)=> setName(e.target.value)}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Model;
