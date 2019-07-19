import React from 'react';
import {connect} from 'react-redux';
import {setCredentials} from './Store/action';
import UserDashboard from './UserDashboard';
import './App.css';

class App extends React.Component{
  userName;
  password;
    constructor(){
      super();
      this.state={
        userName:'',
        password:'',
        loginError:'',
        loginSuccess:''
      }
    }
    onChangeCred=(e)=>{
      
      this.setState({ userName: e.target.value });
    }
    onChangePass=(e)=>{
      this.setState({password: e.target.value});
    }
    

    validateCredentials(){
       if(this.state.userName==this.props.getCredentials.username && this.state.password==this.props.getCredentials.password){
         this.setState({loginSuccess:<UserDashboard userDetail={this.props.getUserInfo}/>})
         this.setState({loginError:''})
       }
       else{
        this.setState({loginError:"Invalid UserName and Password"});
        this.setState({loginSuccess:''});
       }
    }

    render(){
      
      return(
        <div style={{backgroundColor:"grey"}}>
          <ul style={{display:"inline"}}>
            <li style={{display:"inline"}}>
          <tr>
            <th>User Name: </th>
            <td><input type="text" id="username" name="userName" defaultValue={this.state.userName} onChange={this.onChangeCred} style={{borderRadius:"10px"}}/></td>
          </tr>
          <tr>
            <th>Password: </th>
            <td><input type="text" id="password" name="password" defaultValue={this.state.password} onChange={this.onChangePass} style={{borderRadius:"10px"}}/></td>
          </tr>
          <tr>
            <th></th>
            <td><button onClick={() => this.validateCredentials()} style={{borderRadius:"5px"}}>Login</button></td>
            <div style={{color:'white', fontSize:'11px'}}>{this.state.loginError}</div>
          </tr></li></ul><br/>
          {this.state.loginSuccess}
        </div>
      )
    }
}
const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,setCredentials)(App);
