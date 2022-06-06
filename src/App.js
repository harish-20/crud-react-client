import './App.css'
import Table from './components/Table'
import Form from './components/Form'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [student, setStudent] = useState({
    name: '',
    rollno: null,
    dob: '',
    bloodgroup: '',
  })
  const [alldata, setalldata] = useState([{}])

  //Add new student(create)
  const adddata = async (data) => {
    await axios
      .post('http://localhost:3001/student/newstudent', data)
      .then((res) => {
        getall()
        console.log(res.data);
      })
  }

  //get all student(read)
  var getall = async () => {
    await axios.get('http://localhost:3001/student/allstudent').then((res) => {
      const data = res.data
      setalldata(data)
    })
  }

  //render the getall method when mounting
  useEffect(() => {
    getall()
  }, [])

  //delete a student(delete)
  const delinfo = async (id) => {
    await axios
      .delete('http://localhost:3001/student/delstudent/' + id)
      .then((res) => {
        console.log(res.data)
        getall()
      })
  }

  //populate student info in form
  const editinfo = (data) => {
    setStudent(data)
  }

  //update a student info(update)
  const editData = async (data) => {
    await axios
      .patch('http://localhost:3001/student/editstudent/' + data._id, data)
      .then((res) => {
        console.log(res)
      })
    getall()
  }

  return (
    <>
      <Form register={adddata} setEdit={student} getEdit={editData} />
      <Table data={alldata} deldata={delinfo} editdata={editinfo} />
    </>
  )
}

export default App
