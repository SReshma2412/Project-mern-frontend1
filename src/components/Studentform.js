import { useState,useEffect } from "react";

export function Studentform(props) {

    const [name, setName] = useState(props.nameValue)
    const [email, setEmail] = useState(props.emailValue)
    const [age, setAge] = useState(props.ageValue)
    const [rollno, setRollno] = useState(props.rollnoValue)

    useEffect(() => {
        setName(props.nameValue);
        setEmail(props.emailValue);
        setAge(props.ageValue)
        setRollno(props.rollnoValue);
    }, [props.nameValue, props.emailValue, props.ageValue, props.rollnoValue]);


    const arr = [name, email, age, rollno]

    const handleClick = () => {
        props.getState(arr)
    }

    return (
        <div style={{ margin: "0px auto" }} class="bg-warning p-3">
            <div style={{ width: "40%", margin: "0px auto" }}>
                <input defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} type="text" class="form-control my-3 p-1" placeholder="Enter your Name" />
                <input defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} type="text" class="form-control my-3 p-1" placeholder="Enter your Email" />
                <input defaultValue={props.ageValue} onChange={(event) => setAge(event.target.value)} type="number" class="form-control my-3 p-1" placeholder="Enter your age" />
                <input defaultValue={props.rollnoValue} onChange={(event) => setRollno(event.target.value)} type="text" class="form-control my-3 p-1" placeholder="Enter your Rollno" />
                <button type="submit" onClick={handleClick} class="btn btn-success d-block mx-auto px-2 my-3" style={{ fontSize: "20px", height: "50px" }}>{props.children}</button>

            </div>

        </div>
    )
}