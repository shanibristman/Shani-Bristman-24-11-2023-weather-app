import React, { useEffect } from 'react';

import Card from './Card';
import WeatherForFiveDays from './WeatherForFiveDays';
import Search from './Search';

import './Home.css'

export default function Home() {


    return (
        <div className='home'>
            <div className='padding search'>
                <Search />
            </div>
            <div className='card padding'>
                <Card />
            </div>
            <div className='forecasts padding'>
                <WeatherForFiveDays />
            </div>
        </div>
    )
}