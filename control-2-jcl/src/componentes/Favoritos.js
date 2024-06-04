import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Favoritos = ({ favorites }) => {
  return (
    <div>
      <h1 className="text-center">Mis favoritos</h1>
      <Row>
        {favorites.length === 0 ? (
          <p className="text-center">Aún no hay favoritos añadidos.</p>
        ) : (
          favorites.map((fact) => (
            <Col md={4} key={fact.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Text>{fact.value}</Card.Text>
                  <Card.Text><small>Creado el: {new Date(fact.created_at).toLocaleDateString()}</small></Card.Text>
                  {fact.categories.length > 0 && <Card.Text><small>Categorías: {fact.categories.join(', ')}</small></Card.Text>}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Favoritos;