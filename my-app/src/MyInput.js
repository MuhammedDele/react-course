import { useContext } from "react";
import LoanFormInputContext from "./contexts/LoanFormInputContext";
export default function MyInput(){
    const inputContext = useContext(LoanFormInputContext);
    // console.log(inputContext);
    return(
        <div>
            <div>useContext</div>
            <label>{inputContext.labelTitle}
                    <input onChange={(event) => {
                        inputContext.handleChange(event.target.value)
                    }} value={inputContext.inputValue} />
                </label>
        </div>
    )
}