import React from 'react';

const Favorites = ({ favorites }) => {
    return (
        <div>
            <h1>Mis favoritos</h1>
            {favorites.length === 0 ? (
                <p>Aún no hay favortios añdidos.</p>
            ) : (
                favorites.map((fact) => (
                    <div key={fact.id}>
                        <p>{fact.value}</p>
                        <p>Created at: {fact.created_at}</p>
                        {fact.categories.length > 0 && <p>Categories: {fact.categories.join(', ')}</p>}
                    </div>
                ))
            )}
        </div>
    );
};

export default Favorites;
