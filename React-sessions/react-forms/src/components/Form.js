import react, { useState } from "react"


export default function Form() {

    const [input, setInput] = useState("")

    const [fullname, setFullname] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
        console.log(input)
    }


    const handleFullName = (event) => {
        setFullname(event.target.value)
        console.log(fullname)
    }

    return (
        <div>


            <form action="">
                <input onChange={handleInput} value={input} type="text" />


                <input onChange={handleFullName} value={fullname} type="text" placeholder="FullName" />
           
           
           
            </form>

        </div>
    )
}