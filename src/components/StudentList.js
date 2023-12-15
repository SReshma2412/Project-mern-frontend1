import Axios from "axios";
import { useEffect, useState } from "react";
import { StudentListRow } from "./StudentListRow";
export function StudentList() {
    const[arr,setArr]=useState([])
    useEffect(() => {
        Axios.get("https://crud-deployment-backend1-38qv.onrender.com/studentRoute/")
            .then((res) => {
                if (res.status === 200) {
                 setArr(res.data)
                }
                else {
                    Promise.reject()
                }
            })
            .catch((err) => alert(err))
    }, [])

    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <StudentListRow key={ind} obj={val}/>
        })   
    }
    return (
        <div class="bg-info">
            <table class="table table-bordered table-info table-hover table-striped" style={{fontFamily:"cursive",maxWidth:"80%",margin:"20px auto"}}>
                <thead>
                    <tr class=" text-center">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>RollNo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {ListItems()}
                </tbody>
            </table>

        </div>
    )
}