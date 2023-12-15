import { Link } from "react-router-dom";
import Axios from "axios";
export function StudentListRow(props) {
  const { _id, name, email, age, rollno } = props.obj;


  const handleClickDelete = () => {
    Axios.delete("https://crud-deployment-backend1-38qv.onrender.com/studentRoute/delete-student/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Record deleted Succeesfully!")
          window.location.reload()
        }
        else {
          Promise.reject()
        }
      })
      .catch((err) => alert(err))
  }

  
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{age}</td>
      <td>{rollno}</td>
      <td class="d-flex justify-content-center">
      <Link to={"/edit-student/"+_id} class="text-decoration-none text-light ">
        <button  class="btn btn-success "> Edit</button></Link> 
        <button onClick={handleClickDelete} class="btn btn-danger  mx-2 "> Delete</button>
      </td>
    </tr>
  )
}