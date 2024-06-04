import React, { useState, useEffect  } from 'react';
import BuscarFacts from './componentes/BuscarFacts';
import Favoritos from './componentes/Favoritos';
import { Button, Container, Spinner } from 'react-bootstrap';
import Header from './componentes/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const addToFavorites = (fact) => {
        if (!favorites.some((fav) => fav.id === fact.id)) {
            const newFavorites = [...favorites, fact];
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            toast.success('Fact agregado a favoritos');
        } else {
            toast.info('El fact ya está en favoritos');
        }
    };

    const toggleFavoritesView = () => {
        setLoading(true);
        setTimeout(() => {
            setShowFavorites(!showFavorites);
            setLoading(false);
        }, 500);
    };

    return (
        <Container>
            <Header course="Control 2: React/Axios" detail="TEL335 1s2024"/>
            <div>
                <Button variant="primary" onClick={toggleFavoritesView}>
                    {showFavorites ? 'Buscar Facts' : 'Ver mis favoritos'}
                </Button>
                {loading ? (
                    <Spinner animation="border" />
                ) : (
                    showFavorites ? (
                        <Favoritos favorites={favorites} />
                    ) : (
                        <BuscarFacts addToFavorites={addToFavorites} />
                    )
                )}
            </div>
            <ToastContainer />
        </Container>
    );
};

export default App;