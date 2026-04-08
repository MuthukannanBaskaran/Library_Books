import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { Navigate, replace, useParams } from "react-router-dom";
import type { BookTypes } from "../types/Types";

export default function BookDetails() {
    const params = useParams();
    let bookId = 0;
    if (!isNaN(Number(params.bookId))) {
        bookId = Number(params.bookId);
    }

    const books: BookTypes[] | null = useContext(BooksContext);
    if (!books || books.length === 0) {
        return <p>Loading Books....!!!!</p>;
    }

    const book = books ? books.find(b => b.id === bookId) : null;
    if (!book) {
        return <Navigate to="/booknotfound" replace />;
    }

    return (
        <>
            {
                book ?
                    (
                        <div>
                            <h1>{book.title}</h1>
                            <h2>by {book.author}</h2>
                            <p>{book.description}</p>
                        </div>
                    )
                    :
                    (<p className="not-found">Book not found</p>)
            }
        </>
    )
}