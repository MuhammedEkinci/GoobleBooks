import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

// import getSavedBooks and deleteBook from API file
import * as API from '../utils/API';

function SavedBooks() {
    // create state for our saved books array coming from our API
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    // create function to run getSavedBooks and save our saved books from the DB to state
    const getBooks = () => {
        API.getSavedBooks()
            .then(({ data }) => setSavedBooks(data))
            .catch((err) => console.log(err));
    };

    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleDeleteBook = (mongoId) => {
        API.deleteBook(mongoId)
            .then(() => getBooks())
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Container fluid>
                <h2>{savedBooks.length ? `Saved Books:` : 'You have no saved books!'}</h2>
                <CardColumns>
                    {savedBooks.map((book) => {
                        return (
                            <Card key={book._id} border='dark'>
                                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <p className='small'>Authors: {book.authors}</p>
                                    <Card.Text>{book.description}</Card.Text>
                                    <Button className='delete-btn' variant="danger" size="sm" onClick={() => handleDeleteBook(book._id)}>Delete</Button>
                                    <Button className='view-btn' variant="success" size="sm" style={{margin: "10px"}}>View Book</Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );
}

export default SavedBooks;