import "./FormStyle.css"
import Modal from "./modal";
import {useState } from "react";
import MyComponent from "./MyComponent";
import  LoanFormInputContext from "./contexts/LoanFormInputContext";
export default function LoanForm({title}){
    const[errorMessage, setErrorMessage] = useState(null);
    const[modalIsVisible, setModalIsVisible] = useState(false);
    const[loanInputs, setLoanImputs] = useState({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployee:false,
        salary:""
    });
    const btnIsDisabled = loanInputs.name === "" || loanInputs.phoneNumber === "" || loanInputs.age === ""
    function handleFormSubmit(event){
        event.preventDefault();
        if(loanInputs.age < 18){
            setErrorMessage("You must be at least 18 years old to apply for a loan");
            setModalIsVisible(true);
            return;
        }
        setModalIsVisible(true);
        alert("form submitted");
        console.log(loanInputs);
    }
    function handleDivClick(){
        if(modalIsVisible){
            setModalIsVisible(false);
        }
    }
    function handlePhoneNumberInputCahnge(value){
        setLoanImputs({...loanInputs, phoneNumber:value})
    }
    function handleNameInputChange(value){
        setLoanImputs({...loanInputs, name:value})
    }
    
    return(
        
        <div onClick={handleDivClick}
         className="flex" style={{ flexDirection:"column"}}>
            <h1>{title}</h1>
            <form id="loan-form"className="flex " style={{ flexDirection:"column"}}>
                <h1>Requesting a Loan</h1>
                <hr />
                <LoanFormInputContext.Provider value={{inputValue:loanInputs.name, handleChange:handleNameInputChange, labelTitle:"Name :"}}>
                    <MyComponent />
                </LoanFormInputContext.Provider>
                {/* <label>Name:
                    <input onChange={(event) =>{
                        setLoanImputs({...loanInputs, name:event.target.value})
                    }} value={loanInputs.name}/>
                </label> */}
                <LoanFormInputContext.Provider  value={{inputValue:loanInputs.phoneNumber, handleChange:handlePhoneNumberInputCahnge, labelTitle:"Phone Number :"}}>
                    <MyComponent />
                </LoanFormInputContext.Provider>
                
                {/* <label>Phone Number:
                    <input onChange={(event) => {
                        setLoanImputs({...loanInputs, phoneNumber:event.target.value})
                    }} value={loanInputs.phoneNumber} />
                </label> */}
                <label>Age:
                    <input value={loanInputs.age} onChange={(event) =>{
                        setLoanImputs({...loanInputs, age:event.target.value})
                    }}/>
                </label>
                <label>Are you an employee
                    <input type="checkbox" value={loanInputs.isEmployee} onChange={(event) =>{
                        setLoanImputs({...loanInputs, isEmployee:event.target.checked})
                    }} />
                </label>
                <label>Salary:
                    <select value={loanInputs.salary} onChange={(event) =>{
                        setLoanImputs({...loanInputs, salary:event.target.value})
                    }}>
                        <option>select an option</option>
                        <option>les than 500 $</option>
                        <option>between 500 - 2000 $</option>
                        <option>above 2000 $</option>
                    </select>
                </label>
                <button className="disabled" onClick={handleFormSubmit} disabled={btnIsDisabled} id="submit-btn" type="submit">Submit</button>
            </form>
            <Modal errorMessage={errorMessage} isVisible={modalIsVisible}/>
        </div>
    )
}