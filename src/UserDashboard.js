import React from 'react';
 const UserDashboard=(props)=>{
     props.userDetail.user.map(val=>{
         console.log("kl",val);
     })
    return <div><h1 style={{color:'white'}}>User's DashBoard</h1>{props.userDetail.user.map(val=>{
        return <table style={{border:"1px solid white",backgroundColor:'silver',borderRadius:'5px',borderSpacing:"20px"}}><th>Id</th><td>{val.id}</td><th>Name</th><td>{val.name}</td><th>Age</th><td>{val.age}</td><th>Gender</th><td>{val.gender}</td><th>Email</th><td>{val.email}</td><th>PhoneNo</th><td>{val.phoneNo}</td></table>
    })}</div>
}
export default UserDashboard;