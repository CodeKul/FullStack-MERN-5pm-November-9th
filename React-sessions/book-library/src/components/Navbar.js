import React from 'react';
import { useContext } from 'react';
import { BookContext } from './BookContext';

export default function Navbar() {

    const books = useContext(BookContext)
    return <div>

        <nav>
            {books.length}
        </nav>
    </div>;
}
