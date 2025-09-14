export default function MyComponent({value, handleChange, inputName}){
    return (
        <div>
            <div>communicating using props</div>
            <label>{inputName}
                    <input onChange={(event) => {
                        handleChange(event.target.value)
                    }} value={value} />
                </label>
        </div>
    )
}