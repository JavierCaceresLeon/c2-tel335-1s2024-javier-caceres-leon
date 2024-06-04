import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemFact = ({ fact, addToFavorites }) => {
    return (
        <Card style={{ marginBottom: '20px' }}>
            <Card.Body>
                <Card.Text>{fact.value}</Card.Text>
                <Card.Text>Created at: {fact.created_at}</Card.Text>
                {fact.categories.length > 0 && <Card.Text>Categories: {fact.categories.join(', ')}</Card.Text>}
                <Button variant="success" onClick={() => addToFavorites(fact)}>Me gusta</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemFact;