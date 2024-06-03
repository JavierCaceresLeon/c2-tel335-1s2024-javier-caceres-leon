import React from 'react';

const FactItem = ({ fact, addToFavorites }) => {
    return (
        <div>
            <p>{fact.value}</p>
            <p>Created at: {fact.created_at}</p>
            {fact.categories.length > 0 && <p>Categories: {fact.categories.join(', ')}</p>}
            <button onClick={() => addToFavorites(fact)}>Me gusta</button>
        </div>
    );
};

export default FactItem;