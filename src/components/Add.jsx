import React, { useState } from 'react'

const Add = () => {
    const[friends,changeFriends]=useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":""

        }
    )
    const InputHandler=(event)=>{
        changeFriends({...friends,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(friends)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={friends.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name of friend</label>
                            <input type="text" className="form-control" name='friendName' value={friends.friendName} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Nick name</label>
                            <input type="text" className="form-control" name='friendNickName' value={friends.friendNickName} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="textarea" className="form-control" name='DescribeYourFriend' value={friends.DescribeYourFriend} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Add NEW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add