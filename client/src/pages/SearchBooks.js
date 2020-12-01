import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, CardColumns } from "react-bootstrap";

function SearchBooks() {


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