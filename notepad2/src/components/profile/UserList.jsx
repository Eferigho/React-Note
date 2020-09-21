import React , {useEffect, useState} from 'react';
import Card from './Card';
import './style.css';

export default function UserList(){

    const [userData, setUserData] = useState([])
    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUserData(data)
        })
        .catch(err=>console.log(err))
    },[])
        const user = userData[0]
    return(
        <div className="realDiv">
            <div><h1>User List</h1></div>
            <div className = "wrapper">
                {
                    userData.map((user, index)=>{
                        return (
                            <div  key = {user.id}className="mainDiv">
                                <img src = {`https://picsum.photos/id/${index * 33}/400/200`}/>
                                <h1>Name : {user.name}</h1>
                                <h3>Email : {user.email}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}