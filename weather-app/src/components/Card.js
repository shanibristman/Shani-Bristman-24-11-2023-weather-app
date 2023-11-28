import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrent, addToFavorite } from '../reducers/dataSlice';

import './Card.css'

export default function Card() {

    const dispatch = useDispatch();
    // const favoritesCart = useSelector((state) => state.data.favorites)
    const currentWeather = useSelector((state) => state.data.current[0]);
    const status = useSelector((state) => state.data.statusCurrent);
    const error = useSelector((state) => state.data.errorCurrent)
    const city = useSelector((state) => state.data.currentCity)
    const cityKey = useSelector((state) => state.data.currentKey)

    const [favoritesCart, setFavoriteCart] = useState(JSON.parse(localStorage.getItem('favorites')))
    const [isFavoriteCity, setIsFavoriteCity] = useState();


    const checkIsFavorite = () => {
        // console.log(favoritesCart)
        let res;
        if (favoritesCart) {
            res = favoritesCart.find(item => item.id === cityKey)
            if (res) {
                return true
            }
        }
        // return favoritesCart.flat().includes(cityKey) // ??????????
        return false
    }


    const saveFavorite = () => {
        if (favoritesCart) {
            // let array = [...favoritesCart, [cityKey, city]]
            // console.log("🚀 ~ file: Card.js:33 ~ handleFavorite ~ array:", array)
            localStorage.setItem('favorites', JSON.stringify([...favoritesCart, { id: cityKey, city: city }]));
        }
        else {
            localStorage.setItem('favorites', JSON.stringify([{ id: cityKey, city: city }]))
        }

        setFavoriteCart(JSON.parse(localStorage.getItem('favorites')))
    }

    const deleteFavorite = () => {
        let updateFavorites = favoritesCart ? favoritesCart.filter(item => item.id !== cityKey) : []
        console.log("🚀 ~ file: Card.js:44 ~ deleteFavorite ~ updateFavorites:", updateFavorites)

        localStorage.setItem('favorites', JSON.stringify(updateFavorites))

        setFavoriteCart(JSON.parse(localStorage.getItem('favorites')))
    }

    useEffect(() => {
        setIsFavoriteCity(checkIsFavorite())
    }, [favoritesCart]);

    useEffect(() => {
        dispatch(fetchCurrent());
        setIsFavoriteCity(checkIsFavorite())
    }, [dispatch]);

    console.log("🚀 ~ file: Card.js:11 ~ Card ~ favoritesCart:", favoritesCart)

    return (
        <div>
            {status === 'loading' && <p>Loading current 1...</p>}
            {status === 'failed' && <p>Error Data 1: {error}</p>}
            {status === 'succeeded'
                && (
                    <div className="cardDetails">
                        {!isFavoriteCity ?
                            <i className="fa-regular fa-heart heart" onClick={saveFavorite}></i>
                            : <i className="fa-solid fa-heart heart" onClick={deleteFavorite}></i>}

                        <div className="WeatherDetails">
                            <div>{city}</div>
                            <div>{currentWeather.Temperature.Metric.Value}° {currentWeather.Temperature.Metric.Unit}</div>
                            <div>{currentWeather.WeatherText}</div>
                        </div>
                    </div>
                )}

        </div>
    )
}

