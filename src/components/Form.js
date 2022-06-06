import React, { useEffect, useState } from 'react'

function Form({ register, setEdit, getEdit }) {
  const [data, setData] = useState({
    name: '',
    rollno: 0,
    dob: '',
    bloodgroup: '',
  })

  const [editmode, setEditMode] = useState(false)
  useEffect(() => {
    if (setEdit.name !== '') {
      document.getElementById('name').value = setEdit.name
      document.getElementById('rollno').value = setEdit.rollno
      document.getElementById('dob').value = setEdit.dob
      document.getElementById('bloodgroup').value = setEdit.bloodgroup
      setData(setEdit)
      setEditMode(true)
    }
  }, [setEdit])

  const editInfo = (e) => {
    getEdit(data)
    setEditMode(false)
  }

  //assign value to state hook everytime input change
  const assign = (e) => {
    const { id, value } = e.target
    setData({
      ...data,
      [id]: value,
    })
  }

  const sendData = (e) => {
    register(data)
  }

  return (
    <div className="formdiv">
      <h1>CRUD WITH APIS</h1>

      <form onSubmit={sendData} autoComplete="off">
        <label>Name:</label>
        <br />
        <input type="text" id="name" onChange={assign} />
        <br />
        <label>Roll:</label>
        <br />
        <input type="number" id="rollno" onChange={assign} />
        <br />
        <label>D.O.B:</label>
        <br />
        <input type="text" id="dob" onChange={assign} />
        <br />
        <label>Bloodgroup:</label>
        <br />
        <input type="text" id="bloodgroup" onChange={assign} />
        <br />
        {editmode === true ? (
          <button onClick={(e) => editInfo(e)}>edit</button>
        ) : (
          <button type="submit">Submit</button>
        )}
        <button type="reset">Reset</button>
      </form>
    </div>
  )
}

export default Form
