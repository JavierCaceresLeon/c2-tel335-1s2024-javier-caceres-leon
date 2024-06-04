import React, { useState } from 'react';
import BuscarFacts from './componentes/BuscarFacts';
import Favoritos from './componentes/Favoritos';
import { Button, Container } from 'react-bootstrap';
import Header from './componentes/Header';

const App = () => {
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const addToFavorites = (fact) => {
        if (!favorites.some((fav) => fav.id === fact.id)) {
            setFavorites([...favorites, fact]);
        }
    };

    return (
        <Container>
            <Header course="Control 2: React/Axios" detail="TEL335 1s2024"/>
            <div>
                <Button variant="primary" onClick={() => setShowFavorites(!showFavorites)}>
                    {showFavorites ? 'Buscar Facts' : 'Ver mis favoritos'}
                </Button>
                {showFavorites ? (
                    <Favoritos favorites={favorites} />
                ) : (
                    <BuscarFacts addToFavorites={addToFavorites} />
                )}
            </div>
        </Container>
    );
};

export default App;