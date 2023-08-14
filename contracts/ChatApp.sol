

// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract ChatApp{

    //user sturct- every user have unique property
    //as name, friendlist
    struct user{
        string name;
        friend[] friendList;
    }

    struct friend{
        address pubkey;
        string name;
    }

    struct message{
        address sender;
        uint256 timestamp;
        string msg; 
    }

    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessages;


    //check user existance
    function checkUserExist( address pubkey) public view returns(bool){
        return bytes(userList[pubkey].name).length>0;
    }

    //create account
    function createAccount(string calldata name) external {
        require(checkUserExist(msg.sender)==false, "User aready exsit");
        require(bytes(name).length>0, "Name can't be empty");

        userList[msg.sender].name = name;
    }

    //Get USERNAME

    function getUsername(address pubkey) external view returns(string memory){
        require(checkUserExist(pubkey), "User not registered");
        return userList[pubkey].name;
    }

    //Add friend

    function addFriend(address friend_key, string calldata name)external {
        require(checkUserExist(msg.sender), "Create an account first");
        require(checkUserExist(friend_key), "User is not registered");
        
    }



}