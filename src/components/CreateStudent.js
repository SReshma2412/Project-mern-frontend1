import { useState } from "react";
import { Studentform } from "./Studentform";
import Axios from "axios";
export function CreateStudent() {


  const [arr, setArr] = useState([])

  const getState = (childData) => {
    setArr(childData)
  }

  const handleSubmit = (event) => {
   event.preventDefault();
    const data = { name: arr[0], email: arr[1], age: arr[2], rollno: arr[3] }
    Axios.post("https://crud-deployment-backend1-38qv.onrender.com/studentRoute/create-student", data)
      .then((res) => {
        if (res.status === 200) {
     alert("Record Added Succesfully!")
        }
        else {
          Promise.reject()
        }
      })
      .catch((err) => alert(err));
      event.target.reset();

  }
  return (

      <form onSubmit={handleSubmit} >
      <Studentform getState={getState}
      nameValue=""
      emailValue=""
      ageValue=""
      rollnoValue="" >
        Create Student
        </Studentform>
    </form>

  )
}