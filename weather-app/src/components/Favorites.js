import React, { useState } from 'react'

export default function Favorites() {

    const [favoritesCart, setFavoriteCart] = useState(JSON.parse(localStorage.getItem('favorites')))


    return (
        <div>

            {favoritesCart && favoritesCart.map(item => (
                <div key={item.id}>
                    <div>
                        {item.id}
                        {item.city}
                    </div>
                </div>
            ))}
        </div>
    )
}
