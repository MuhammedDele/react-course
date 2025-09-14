export default function  Modal({isVisible,errorMessage=null}){
    if(isVisible){
            return(
        <div >
            <div style={{color: errorMessage ? "red" :"green"}} id="modal">
                <h1>{errorMessage !== null ? errorMessage: "The form has been submitted successfully"}</h1>
            </div>
        </div>
    );
    }else{
        return null;
    }

}