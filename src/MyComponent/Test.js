import React, { Component } from "react";

export default class Test extends Component {
    clickHandler() {
     console.log("Clicked Me");
    }
    editStudent(id){
     console.log('Record Edit for Id',id);
    }
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let { myObj } = this.props;
    // let {message,message1,meesage2} = this.props;
   
    return (
      <div>
          <caption>Student Infor</caption>
        <table className="table table-striped">
          
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              
              <td>{myObj[0].id}</td>
              <td>{myObj[0].name}</td>
              <td>{myObj[0].address}</td>
              <td><button className="btn btn-success" onClick={this.editStudent}>Edit</button></td>
            </tr>
          </tbody>
        </table>

        <button className="btn btn-danger" onClick={this.clickHandler}>
          Click Me!
        </button>
      </div>
    );
  }
}
