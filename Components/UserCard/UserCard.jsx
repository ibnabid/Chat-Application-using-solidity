import React from "react";
import Image from "next/image";

//Internal Import
import Style from './UserCard.module.css';
import images from '../../assets';

const UserCard = ({el, i, addFriends}) => {
  return (
      <div className={Style.UserCard}>
        <div className={Style.UserCard_box}>
          <Image src={images[`image${i+1}`]}
            alt="user"
            width={100}
            height={100}
          />

          <div className={Style.UserCard_box_info}>

          </div>
        </div>
      </div>
  )
};

export default UserCard;
