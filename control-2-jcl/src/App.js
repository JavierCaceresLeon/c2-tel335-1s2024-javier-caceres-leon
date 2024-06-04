import React, { useState } from 'react';
import BuscarFacts from './componentes/BuscarFacts';
import Favoritos from './componentes/Favoritos';
import Header from './componentes/Header';
import './App.css';

const App = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

    const agregarAfavoritos = (fact) => {
        if (!favoritos.some((fav) => fav.id === fact.id)) {
            setFavoritos([...favoritos, fact]);
        }
    };

    return (
        <div>
          <Header course="Control 2: React/Axios" detail="TEL335 1s2024"/>
            <button onClick={() => setMostrarFavoritos(!mostrarFavoritos)}>
                {mostrarFavoritos ? 'Buscar Facts' : 'Ver mis favoritos'}
            </button>
            {mostrarFavoritos ? (
                <Favoritos favorites={favoritos} />
            ) : (
                <BuscarFacts agregarAfavoritos={agregarAfavoritos} />
            )}
        </div>
    );
};

export default App;