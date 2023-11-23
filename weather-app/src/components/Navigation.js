import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';


export default function Navigation() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/weather' element={<Weather />} />
        </Routes>
    )
}
