import React from 'react'
function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>D.O.B</th>
            <th>Bloodgroup</th>
            <th>Create Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.rollno}</td>
                <td>{e.name}</td>
                <td>{e.dob}</td>
                <td>{e.bloodgroup}</td>
                <td>{String(e.createtime).slice(0, 10)}</td>
                <td>
                  <span
                    className="material-icons"
                    onClick={() => props.editdata(e)}
                  >
                    edit
                  </span>
                </td>
                <td>
                  <span
                    className="material-icons"
                    onClick={() => props.deldata(e._id)}
                  >
                    delete
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
