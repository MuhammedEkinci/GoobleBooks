import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Input, Card,  CardColumns  } from "react-bootstrap";

import { saveBook, searchGoogleBooks } from "../utils/API";

function SearchBooks() {
    // state for holding returned books from google api
    const [searchedBooks, setSearchBooks] = useState([]);

    // state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    //Method to search books from google API
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("pressed");


        //if there is no search input return
        if(!searchInput) {
            return false;
        }   
        //will search books from google API
        searchGoogleBooks(searchInput)
            .then(({ data }) => {
                const bookData = data.items.map((book) => ({
                    bookId: book.id,
                    authors: book.volumeInfo.authors || ['No author to display'],
                    title: book.volumeInfo.title,
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks?.thumbnail || '',
                }));
                console.log(bookData);

                return setSearchBooks(bookData);
            })
            .then(() => setSearchInput(''))
            .catch((err) => console.log(err));
    };

     // function to handle saving a book to our database
     const handleSaveBook = (bookId) => {
        // find the book in `searchedBooks` state by the matching id
        const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

        // send the books data to our api
        saveBook(bookToSave)
            .then(() => console.log('book saved!'))
            .catch((err) => console.log(err));
    };


    return (
        <>
            <Container fluid style={{margin:"0 auto"}}>
                {/* search for books  */}
                <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                        <Col xs={12} md={12}>
                            <Form.Control 
                                name='searchInput'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for a book'
                            />
                            <Button style={{float:"right", margin: "10px"}} className="search-btn" variant="primary" type="submit">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>

            <Container fluid>
                <h2>Results: </h2>
                <CardColumns>
                    {searchedBooks.map((book) => {
                        return (
                            <Card key={book.bookId} border='dark'>
                                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <p className='small'>Authors: {book.authors}</p>
                                    <Card.Text>{book.description}</Card.Text>
                                    <Button className='save-btn' variant="success" size="sm" onClick={() => handleSaveBook(book.bookId)}>Save Book</Button>
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

export default SearchBooks;