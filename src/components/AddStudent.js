import React, { Component } from "react";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        fname: "",
        lname: "",
        address: "",
        course: "",
      },
    };
  }
  changeHandler(label, event) {
    let { value } = event.target;
    let { student } = this.state;
    student[label] = value;
    this.setState({
      student,
    });
  }
  submitData(e) {
    e.preventDefault();
    console.log("data received", this.state, this.props);
    let {stu} = this.state;
    console.log("stu",stu);
    this.props.updateStudent(this.state.student);
  }
  render() {
    let { student } = this.state;
    return (
        <div className="container my-3">
            <form onSubmit={this.submitData.bind(this)}> 
        <div className="mb-3">
          <label for="fname">First Name</label>
          <input
            type="text"
            name="fname"
            value={student.fname}
            onChange={this.changeHandler.bind(this, "fname")}
            className="form-control"
            id="fname"
          />
        </div>
        <div className="mb-3">
          <label for="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            value={student.lname}
            onChange={this.changeHandler.bind(this, "lname")}
            className="form-control"
            id="lname"
          />
        </div>
        <div className="mb-3">
          <label for="address">Adress</label>
          <textarea
            name="address"
            value={student.address}
            onChange={this.changeHandler.bind(this, "address")}
            className="form-control"
            id="lname"
          />
        </div>
        <div className="mb-3">
          <select
            name="course"
            onChange={this.changeHandler.bind(this, "course")}
            class="form-control"
            id="exampleFormControlSelect2"
           >
            <option>Angular</option>
            <option>Java</option>
            <option>Reac</option>
          </select>
        </div>

        <button
          type="submit"
          
          className="btn btn-primary"
        >
          Submit
        </button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
