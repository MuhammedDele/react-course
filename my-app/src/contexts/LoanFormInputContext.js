import { createContext } from "react";
const LoanFormInputContext = createContext({
    labelTitle: "",
    handleChange: null,
    inputValue: null
});
export default LoanFormInputContext;
