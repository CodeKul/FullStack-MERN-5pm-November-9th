import React, { useEffect, useState } from 'react';


// useeffect hook will be executed/triggered when component 
// is mounted/render as well as re-render

export default function UseEffectExample() {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json()
            }).then((result) => {
                console.log(result)

                setData(result)

                console.log(data)
            })
        //   return () => {
        //     second;
        //   };
    }, []);





    return <div>
        {data.map((item) => {
            return (
                <h3>{item.name}</h3>
            )
        })}




    </div>;
}
