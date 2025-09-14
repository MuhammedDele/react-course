import { useState } from "react";
export default function MyForm(){
    //old approach with multiple states
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        generalInfo: "",
        country: "",
        isStudent: false,
        status: ""
        
    });
    return (
        <form onSubmit={(e) => {
            alert("test")
            e.preventDefault();
              
            console.log(formData);
        }}>
            <label htmlFor="email">Email:</label>
            <input value={formData.email} onChange={(event) => {
                // const newFofrmData = {...formData};
                // newFofrmData.email = event.target.value;
                // setFormData(newFofrmData);
                setFormData({ ...formData, email: event.target.value });
                
                setFormData({email: event.target.value, password: formData.password});
            }} type="email" id="email" name="email" placeholder="Enter your email" />
            <br />
            <label htmlFor="password">Password:</label>
            <input value={formData.password} onChange={(event) =>{
                // const newFofrmData = {...formData};
                // newFofrmData.password = event.target.value;
                // setFormData(newFofrmData);
                setFormData({ ...formData, password: event.target.value });
                
                // setFormData({password:event.target.value, email: formData.email});
            }} type="password" id="password" name="password" placeholder="Enter your password" />
            <br />

            <label>General information</label>
            <textarea value={formData.generalInfo} onChange={(event) => {
                setFormData({ ...formData, generalInfo: event.target.value });
            }} placeholder="Enter your information here">{formData.generalInfo}</textarea>
            <br />
            <label>are you student</label>
            <input value={formData.isStudent} onChange={(event) => {
                setFormData({ ...formData, isStudent: event.target.checked });
            }} type="checkbox" name="student" />
            <br />
            <select name="country" value={formData.country} onChange={(event) => {
                setFormData({ ...formData, country: event.target.value });
            }}>
                <option>KSA</option>
                <option>Turkey</option>
                <option>Syria</option>
            </select>
            <br />
            <input checked={formData.status ==="student"} value="student" onChange={(event) =>{
                setFormData({ ...formData, status: event.target.value });
            }} name="status" type="radio" />
                Student
            
            <input checked={formData.status ==="teacher"}  value="teacher" onChange={(event) =>{
                setFormData({ ...formData, status: event.target.value });
            }} name="status" type="radio" />
                Teacher
            <button type="submit">Submit</button>
        </form>
    )
}