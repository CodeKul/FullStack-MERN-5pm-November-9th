import React from 'react';
import { createContext, useState } from 'react';


export const BookContext = createContext()

export default function BookProvider(props) {

    const initialState = [
        {
            book: "Harry Potter",
            author: "J.K.Rowling",
            price: 500
        },
        {
            book: "Eloquent Javascript",
            author: "ECMASCRIPT",
            price: 800
        },
        {
            book: "Java",
            author: "Sun MicroSystems",
            price: 400
        },
        {
            book: "ReactJs",
            author: "Facebook",
            price: 1500
        },
    ]
    const [books, setBooks] = useState(
        initialState
    )



    return <div>


        <BookContext.Provider value={books}>

            {props.children}
        </BookContext.Provider>


    </div>;
}
