import react, { useState } from "react"


export default function Form2() {

    const [input, setInput] = useState({
        fname: "",
        email: "",
        password: "",
        gender: "",
        isActive: false,
        city: ""
    })

    let newData = {
        fname: "Sanket",
        email: "sb@gmail.com",
        password: "123456",
        gender: "male",
        isActive: false,
        city: "pune"
    }

    const handleInput = (event) => {
        setInput({
            // ...input, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            ...input, ...newData
        })
        console.log(input)
    }



    return (
        <div>


            <form action="">
                <input onChange={handleInput} value={input} type="text" />
                <br />

                <input onChange={handleInput} value={input.fname} name="fname" type="text" placeholder="FullName" />
                <br />

                <input onChange={handleInput} value={input.email} name="email" type="email" placeholder="FullName" />

                <br />
                <input onChange={handleInput} value={input.password} name="password" type="password" placeholder="FullName" />

                <br />

                <label htmlFor="">Gender</label>

                <input onChange={handleInput} name="gender" value="female" type="radio" />
                <label htmlFor="">Female</label>


                <input onChange={handleInput} name="gender" value="male" type="radio" />
                <label htmlFor="">Male</label> <br />


                <label htmlFor="">Status</label>

                <input value={true} checked={input.isActive} onChange={handleInput} type="checkbox" name="isActive" id="" />



                <select onChange={handleInput} value={input.city} name="city" id="">
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Banglore">Banglore</option>
                </select>
            </form>


            <div>
                <p>Name : {input.fname}</p>
                <p>Email : {input.email}</p>
                <p>Password : {input.password}</p>
                <p>Gender: {input.gender}</p>
                <p>Is Active: {input.isActive ? "Yes" : "No"}</p>
                <p>City: {input.city}</p>
            </div>

        </div>
    )
}