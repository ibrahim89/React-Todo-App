import React from 'react'

function ChildComponent({person}) {
 
   
    return (
       <div>
      <table >
          <theader>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
              </tr>

              </theader>
          <tbody>
              <tr>
                  <td>{person.id} </td>
                   <td>{person.name}</td>

             </tr>
          </tbody>
      </table>
       </div>
       
         )
}

export default ChildComponent
