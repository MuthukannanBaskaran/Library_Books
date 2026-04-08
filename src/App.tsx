import './App.css'
import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import PageNotFound from './components/PageNotFound';
import BookNotFound from './components/BookNotFound';
import SecretBooks from './components/SecretBooks';
import NotAuthenticated from './components/NotAuthenticated';
import { PrivateRoute } from './components/PrivateRoute';

export default function App() {
  return (
    <>
      <BooksProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Navigate to="/" />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/booknotfound" element={<BookNotFound />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/secret" element={<PrivateRoute Component={SecretBooks} />} />
            <Route path="/notauthenticated" element={<NotAuthenticated />} />
          </Routes>
        </Router>
      </BooksProvider>
    </>
  )
}