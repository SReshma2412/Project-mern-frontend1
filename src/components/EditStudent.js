import { useParams } from "react-router-dom";
import { Studentform } from "./Studentform";
import { useEffect, useState } from "react";
import Axios from "axios";


export function EditStudent() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", email: "", age: "", rollno: "" })
    const [newData, setNewData] = useState([])
    useEffect(() => {
        Axios.get("https://crud-deployment-backend1-38qv.onrender.com/studentRoute/update-student/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, email, age, rollno } = res.data
                    setInitialValue({ name, email, age, rollno })
                }
                else {
                    Promise.reject()
                }
            })
            .catch((err) => alert(err))
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name: newData[0], email: newData[1], age: newData[2], rollno: newData[3] }
        Axios.put("https://crud-deployment-backend1-38qv.onrender.com/studentRoute/update-student/" + id, data)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record updated Successfully!")
                }
                else {
                    Promise.reject()
                }


            })
            .catch((err) => alert(err) );
            event.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <Studentform getState={getState} 
            nameValue={initialValue.name}
                emailValue={initialValue.email}
                ageValue={initialValue.age}
                rollnoValue={initialValue.rollno} >
                    Update Student
                    </Studentform>
        </form>
    )
}