import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, CardColumns } from "react-bootstrap";

import { saveBooks, searchGoogleBooks } from "../utils/API";

function SearchBooks() {
    // state for holding returned books from google api
    const [searchBooks, setSearchBooks] = useState([]);

    // state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    //Method to search books from google API
    const handleFormSubmit = (event) => {
        event.preventDefault();


        //if there is no search input return
        if(!searchInput) {
            return false;
        }   
        
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
            });
    }

    return (
        <div>
            <Container fluid style={{margin:"0 auto"}}>
                {/* search for books  */}
                <Form.Row>
                    <Col xs={12} md={12}>
                        <h5>Book Search</h5>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Find Book" />
                        </div>
                        <Button style={{float:"right"}} className="search-btn" variant="primary">Search</Button>
                    </Col>
                </Form.Row>

                {/* when books are found display here */}
                <Row>
                    <h5 style={{padding: "10px"}}>Results:</h5>
                    <Col xs={12} md={12}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchBooks;