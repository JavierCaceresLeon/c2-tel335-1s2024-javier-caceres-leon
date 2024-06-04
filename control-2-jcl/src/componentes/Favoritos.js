import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Favoritos = ({ favorites }) => {
    return (
        <Container>
            <h1>Mis favoritos</h1>
            {favorites.length === 0 ? (
                <p>Aún no hay favoritos añadidos.</p>
            ) : (
                <Row>
                    {favorites.map((fact) => (
                        <Col key={fact.id} sm={12} md={6} lg={4}>
                            <Card style={{ marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Text>{fact.value}</Card.Text>
                                    <Card.Text>Created at: {fact.created_at}</Card.Text>
                                    {fact.categories.length > 0 && <Card.Text>Categories: {fact.categories.join(', ')}</Card.Text>}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Favoritos;
