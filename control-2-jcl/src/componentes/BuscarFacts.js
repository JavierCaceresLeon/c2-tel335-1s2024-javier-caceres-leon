import React, { useState } from 'react';
import axios from 'axios';
import ItemFact from './ItemFact';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import './../BuscarFacts.css';

const BuscarFacts = ({ addToFavorites }) => {
    const [query, setQuery] = useState('');
    const [facts, setFacts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const searchFacts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
            setFacts(response.data.result);
            setError(null);
        } catch (err) {
            setError('Error al obtener los factos');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchFacts();
        }
    };

    return (
        <Container>
            <div>
                <h1>Busca Facts de Chuck Norris</h1>
                <Form>
                    <Form.Group controlId="formQuery" className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Ingresa una palabra clave"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button variant="primary" onClick={searchFacts} className="ml-2">Buscar</Button>
                    </Form.Group>
                </Form>
                {loading ? (
                    <div className="spinner-container">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Row>
                            {facts.map((fact) => (
                                <Col key={fact.id} sm={12} md={6} lg={4}>
                                    <ItemFact fact={fact} addToFavorites={addToFavorites} />
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </div>
        </Container>
    );
};

export default BuscarFacts;