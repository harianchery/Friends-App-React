import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {

    const[friends,changeFriends]=useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>changeFriends(response.data)
        ).catch().finally()
    }
    useEffect(()=>{
        (fetchData())
    },[])  
           
        
    
    return (
       
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">friendName</th>
                                    <th scope="col">friendNickName</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    friends.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.friendName}</td>
                                            <td>O{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View