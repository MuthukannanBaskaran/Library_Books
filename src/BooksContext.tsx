import React, { useState, useEffect, createContext } from "react";
import type { BookTypes } from "./types/Types";

export const BooksContext = createContext<BookTypes[] | null>(null);

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [books, setBooks] = useState<BookTypes[]>([]);

    useEffect(() => {
        fetch('/books.json')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <BooksContext.Provider value={books}>
            {children}
        </BooksContext.Provider>
    )
}