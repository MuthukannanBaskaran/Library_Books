import { useContext } from "react";
import { BooksContext } from "../BooksContext";
import type { BookTypes } from "../types/Types";
import { useLocation } from "react-router-dom";

export default function Books() {
    const query = new URLSearchParams(useLocation().search);
    const searchTerm = query.get("search") || "";
    const books: BookTypes[] | null = useContext(BooksContext);
    const searchedBooks = books ?
        books.filter(book => {
            return book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
                || book.author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
        })
        : null;
    console.log("Searched Books: ", searchedBooks);
    return (
        <>
            <h1>Books Component</h1>
            {
                searchedBooks && searchedBooks.length > 0 ? (
                    <ul>
                        {
                            searchedBooks.map((book) => {
                                return <li key={book.id}>{book.title} by {book.author}</li>
                            })
                        }
                    </ul>
                ) : (
                    <p>Loading Books....!!!</p>
                )
            }
        </  >
    )
}