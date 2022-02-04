import React from 'react';
import { useState } from 'react';

export default function Codekul() {
    const [data, setData] = useState([
        "Java", "Javascript", "React"
    ])

    return <div>

{data.map((item)=>{
    return(
<h1>{item}</h1>
)})}

    </div>;
}
