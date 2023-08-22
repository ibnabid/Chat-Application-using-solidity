import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';

 //internal imports
 
 import {CheckIfWalletConnected, connectWallet, connectingWithContract} from '../Utils/apiFeature';

 export const ChatAppContext = React.createContext();

 export const ChatAppProvider = ({children}) => {
    //USESTATE

    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setuserLists] = useState([]);
    const [error, setError] = useState("");

    //Chat User Data( this shows me whom I am chatting with in this application)

    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");
    const router = useRouter();


    //fetch all the data at the time of page load

    const fetchData = async()=>{
        try {
            //Get Contract
            const contract= await connectingWithContract();
            //Get Contract
            const connectAccount = await connectWallet(); 
            setAccount(connectAccount);
            //GET USER NAME 
            const userName= await contract.getUsername(connectAccount);
            setUserName(userName);
            //GET MY FRIEND LIST
            const friendLists = await contract.getMyFriendList(connectAccount);
            setFriendLists(friendLists);
            //GET ALL APP USER LIST
            const userLists = await contract.getAllAppUser();
            setuserLists(userLists);
        } catch (error) {
            console.log(error);
            setError("Please install and connect your wallet");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    //read massage
    const readMessage = async(friendAdress)=>{
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAdress);
            setFriendMsg(read);
        } catch (error) {
            error("Currently you have no message")
        }
    }

    //Create Account
    const createAccount = async({name, accountAddress}) => {
        try {
            // if(name  || accountAddress) 
            // return setError("Name and AccountAddress, can't be empty")
            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();


        } catch (error) {
            console.error(error);
            setError("Error while creating your account, Please reload the browser");
        }
    }

    //ADD YOUR FRIENDS

    const addFriends = async({name, accountAddress})=>{
        try {
            // if(name || accountAddress) 
            // return setError("Please provide information")
            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push('/');
            window.location.reload(); 

        } catch (error) {
            setError("Something went wrong while adding friend, try again")
        }
    }

    //SEND MESSAGE TO YOUR FRIEND
    const sendMessage = async({msg, address})=>{
        try {
            if(msg || address) 
            return setError("Please Type your Message");

            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Please reload and try again")
        }
    }

    //Read User Info
    const readUser= async(userAddress)=>{
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    };  

    return (
        
        <ChatAppContext.Provider value={{
            readMessage,
        createAccount, 
        addFriends, 
        sendMessage, 
        readUser, 
        connectWallet, 
        CheckIfWalletConnected,
        account, 
        userName, 
        friendLists,
        friendMsg,
        loading, 
        userLists, 
        error, 
        currentUserName, 
        currentUserAddress }}>
                {children}
        </ChatAppContext.Provider>
    );
 };


