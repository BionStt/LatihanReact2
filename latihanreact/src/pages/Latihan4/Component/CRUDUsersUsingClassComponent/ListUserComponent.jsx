import React, { Component } from 'react'
import UserService from './Services/UserService'
import { useNavigate } from 'react-router-dom'



class ListUserComponent extends Component {
    
  constructor(props){
      super(props)

      this.state ={
        users : []
      }
      this.addUser = this.addUser.bind(this);
      this.editUser = this.editUser.bind(this);
      this.deleteUser = this.deleteUser.bind(this);

    //   let navigate = useNavigate();
  }
  

      addUser(){
        this.props.history.push('/add-user/_add');
    }
    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.usersId !== id)});
        });
    }
    viewUser(id){
        // this.props.history.push(`/view-user/${id}`);
        this.navigate("");
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
      UserService.getUsers().then((res) => {
          if(res.data==null)
          {
              this.props.history.push('/add-user/_add');
          }
          this.setState({ users: res.data});
      });
   }



  render() {
    return (
            <div>
            <h2 className="text-center">Users List</h2>
            <div className = "row">
              <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
            </div>
            <br></br>
            <div className = "row">
                  <table className = "table table-striped table-bordered">

                      <thead>
                          <tr>
                              <th>Nomor Id</th>
                              <th> User First Name</th>
                              <th> User Last Name</th>
                              <th> User Email Id</th>
                              <th> Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              this.state.users.map(
                                  user => 
                                  <tr key = {user.usersId}>
                                      <td>{user.usersId}</td>
                                        <td> { user.firstName} </td>   
                                        <td> {user.lastName}</td>
                                        <td> {user.email}</td>
                                        <td>
                                            <button onClick={ () => this.editUser(user.usersId)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.usersId)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.usersId)} className="btn btn-info">View </button>
                                        </td>
                                  </tr>
                              )
                          }
                      </tbody>
                  </table>

            </div>

      </div>
    )
  }
}

export default ListUserComponent