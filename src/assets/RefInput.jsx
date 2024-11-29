import { useRef, useState } from "react";

function RefInput(){
    const [ count, setCount] = useState(0)
    const inputRef = useRef(null)
    const labelRef = useRef(null)
    const handleCheck = () => setCount(count + 1)
    const handleChange =() => labelRef.current.innerText = inputRef.current.value =="" ? "world" : inputRef.current.value

    return(
        <>
        <div>
            Counter: {count}
            <button onClick={handleChange}>+</button>
            <div>
                <label>Enter Your Name</label>
                <input type="text" name="username" ref={inputRef} onChange={handleChange}/>
                <br />
                <div>Hello <span>{labelRef}</span></div>
            </div>
            </div>
        </>
    )
}
export default RefInput;