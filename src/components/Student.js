import React from 'react'

function student(props) {
  
    return (
        <div>
            <table className="table table-striped">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Course</th>
      </tr>
      {props.studentData &&
        props.studentData.map((obj) => {
          return (
            <tr>
              <th>{obj.fname}</th>
              <th>{obj.lname}</th>
              <th>{obj.address}</th>
              <th>{obj.course}</th>
            </tr>
          );
        })}
    </table> 
        </div>
    )
}

export default student
