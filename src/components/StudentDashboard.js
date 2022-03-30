import React, { Component } from 'react'
import AddStudent from './AddStudent'
import Student from './Student'



 class StudentDashboard extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               studentData:[]
          }
      }
      
    updateStudentData(student){
     let {studentData} = this.state;
     console.log("previous Data",studentData);
     studentData.push(student);
     this.setState({...studentData,student});
     console.log("updateStudentData",studentData);
    }
    render() {
        let {studentData} = this.state;
        console.log(this.props);
        return (
            <div>
                <h1>Student Dashboard Component</h1>
                <AddStudent updateStudent={(stud)=>this.updateStudentData(stud)} />
                <Student studentData={studentData}/>

            </div>
        )
    }
}

export default StudentDashboard
