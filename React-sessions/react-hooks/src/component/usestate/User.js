import React, { useState } from 'react';

export default function User() {
    const [userInfo, setUserInfo] = useState({
        fname: "",
        city: "",
        designation: ""
    })

    console.log(userInfo)


    const handleInput = (e) => {
       setUserInfo({...userInfo, [e.target.name]:e.target.value})
       console.log(userInfo)
    }

    return <div>


        <form action="">
            <label htmlFor="">Full Name</label>
            <input onChange={handleInput} name="fname" value={userInfo.fname} type="text" />

            <label htmlFor="">City</label>
            <select onChange={handleInput} value={userInfo.city} name="city" id="">
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Banglore">Banglore</option>
            </select>

            <label htmlFor="">Designation</label>
            <input onChange={handleInput} value={userInfo.designation} name="designation" type="text" />


            <button onClick={handleInput}>Submit</button>
        </form>


    </div>;
}
