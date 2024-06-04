import React, { useState } from 'react';
import axios from 'axios';
import FactItem from './ItemFact';

const BuscarFacts = ({ addToFavorites }) => {
    const [query, setQuery] = useState('');
    const [facts, setFacts] = useState([]);
    const [error, setError] = useState(null);

    const searchFacts = async () => {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
            setFacts(response.data.result);
            setError(null);
        } catch (err) {
            setError('Error al obtener datos');
        }
    };

    return (
        <div>
            <h1>Busca Facts de Chuck Norris</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchFacts}>Buscar</button>
            {error && <p>{error}</p>}
            <div>
                {facts.map((fact) => (
                    <FactItem key={fact.id} fact={fact} addToFavorites={addToFavorites} />
                ))}
            </div>
        </div>
    );
};

export default BuscarFacts;