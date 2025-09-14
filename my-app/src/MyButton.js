import { useState } from 'react';


export default function MyButton(){
    const [count , setCount] = useState(9);

    function handleClick(){
        setCount(count + 1);
    }
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <h1>Muhammed Dele {count}</h1>
            
            <div></div>
        </div>
        
    )
}