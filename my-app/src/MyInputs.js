import { useState } from "react";
export default function MyInputs(){
    const [name,setName] = useState("test");
    function handleChange(event){
        setName(event.target.value);
        console.log(event);

    }
    return(
        <div>
            <label htmlFor="name">Name:</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" placeholder="Enter your name" />
            <br />
            <h3>Your name is: {name}</h3>
        </div>
    )
    }