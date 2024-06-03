import React, { useState } from 'react';
import SearchFacts from './componentes/BuscarFacts';
import Favorites from './componentes/Favoritos';
import Header from './componentes/header';
import './App.css';

const App = () => {
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const addToFavorites = (fact) => {
        if (!favorites.some((fav) => fav.id === fact.id)) {
            setFavorites([...favorites, fact]);
        }
    };

    return (
        <div>
          <Header course="Control 2: React/Axios" detail="TEL335 1s2024"/>
            <button onClick={() => setShowFavorites(!showFavorites)}>
                {showFavorites ? 'Buscar Facts' : 'Ver mis favoritos'}
            </button>
            {showFavorites ? (
                <Favorites favorites={favorites} />
            ) : (
                <SearchFacts addToFavorites={addToFavorites} />
            )}
        </div>
    );
};

export default App;