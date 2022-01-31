import React from 'react';
import { useContext } from 'react';
import { BookContext } from './BookContext';


export default function BookList() {

    const books = useContext(BookContext)
    return <div>

        {books.map((item) => {
            return (
                <li>{ item.book}</li>
            )
        })}

    </div>;
}
