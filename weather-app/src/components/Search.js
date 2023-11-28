import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchData, fetchCurrent, fetchAllWeek, changeKey, changeCity } from '../reducers/dataSlice';

import './Search.css'

export default function Search() {

    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.data.search);
    const status = useSelector((state) => state.data.statusSearch);
    const [searchText, setSearchText] = useState("");
    const [showList, SetShowList] = useState(false)

    const submitSearch = () => {
        dispatch(fetchSearchData(searchText));
        SetShowList(!showList)
    }

    const selectLocation = (key, city) => {
        SetShowList(!showList)
        dispatch(changeKey(key))
        dispatch(changeCity(city))
        // console.log(key)
        dispatch(fetchCurrent())
        dispatch(fetchAllWeek())
    }

    useEffect(() => {
        dispatch(fetchSearchData(searchText));
    }, [dispatch]);


    return (
        <div className='all_search'>
            <div className="searchArea">
                <input placeholder="type.." value={searchText} onChange={(e) => setSearchText(e.target.value.toLowerCase())} />
                {/* <img src={require('../Assets/search.png')} onClick={submitSearch} /> */}
                <i className="fa-solid fa-magnifying-glass" onClick={submitSearch}></i>
            </div>
            {status === 'succeeded'
                && showList &&
                (<div className='list'>
                    {searchResults.map(item => (
                        <div key={item.Key} onClick={() => selectLocation(item.Key, item.LocalizedName)}>{item.LocalizedName}</div>
                    ))}
                </div>)
            }
        </div>
    )
}
