import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'GevAS1AAdErEBrfFTPJF1SteZnctlINW'

export const fetchSearchData = createAsyncThunk('data/searchData', async (text) => {
    const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`)
    const data = await res.json()

    // const data = [
    //     {
    //         "Version": 1,
    //         "Key": "215854",
    //         "Type": "City",
    //         "Rank": 31,
    //         "LocalizedName": "Tel Aviv",
    //         "Country": {
    //             "ID": "IL",
    //             "LocalizedName": "Israel"
    //         },
    //         "AdministrativeArea": {
    //             "ID": "TA",
    //             "LocalizedName": "Tel Aviv"
    //         }
    //     },
    //     {
    //         "Version": 1,
    //         "Key": "209001",
    //         "Type": "City",
    //         "Rank": 95,
    //         "LocalizedName": "Tel Arza",
    //         "Country": {
    //             "ID": "IL",
    //             "LocalizedName": "Israel"
    //         },
    //         "AdministrativeArea": {
    //             "ID": "JM",
    //             "LocalizedName": "Jerusalem"
    //         }
    //     }
    // ]

    return data;
})

export const fetchCurrent = createAsyncThunk('data/fetchCurrent', async (_, thunkAPI) => {

    const { currentKey } = thunkAPI.getState().data

    const res = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${currentKey}?apikey=${API_KEY}`);
    const data = await res.json();

    // const data = [
    //     {
    //         "LocalObservationDateTime": "2023-11-25T21:42:00+02:00",
    //         "EpochTime": 1700941320,
    //         "WeatherText": "Some clouds",
    //         "WeatherIcon": 36,
    //         "HasPrecipitation": false,
    //         "PrecipitationType": null,
    //         "IsDayTime": false,
    //         "Temperature": {
    //             "Metric": {
    //                 "Value": 21.3,
    //                 "Unit": "C",
    //                 "UnitType": 17
    //             },
    //             "Imperial": {
    //                 "Value": 70.0,
    //                 "Unit": "F",
    //                 "UnitType": 18
    //             }
    //         },
    //         "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    //     }
    // ]
    //const data = []
    return data;
})

export const fetchAllWeek = createAsyncThunk('data/fetchAllWeek', async (_, thunkAPI) => {

    const { currentKey } = thunkAPI.getState().data

    const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${currentKey}?apikey=${API_KEY}&metric=true`)
    const data = await res.json()

    //f-??
    //http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=GevAS1AAdErEBrfFTPJF1SteZnctlINW
    // const data = {
    //     "Headline": {
    //         "EffectiveDate": "2023-11-27T07:00:00+02:00",
    //         "EffectiveEpochDate": 1701061200,
    //         "Severity": 7,
    //         "Text": "Noticeably cooler Monday",
    //         "Category": "cooler",
    //         "EndDate": "2023-11-27T19:00:00+02:00",
    //         "EndEpochDate": 1701104400,
    //         "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    //     },
    //     "DailyForecasts": [
    //         {
    //             "Date": "2023-11-27T07:00:00+02:00",
    //             "EpochDate": 1701061200,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 14.7,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Maximum": {
    //                     "Value": 19.4,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 14,
    //                 "IconPhrase": "Partly sunny w/ showers",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Moderate"
    //             },
    //             "Night": {
    //                 "Icon": 35,
    //                 "IconPhrase": "Partly cloudy",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-11-28T07:00:00+02:00",
    //             "EpochDate": 1701147600,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 12.6,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Maximum": {
    //                     "Value": 20.2,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 4,
    //                 "IconPhrase": "Intermittent clouds",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 36,
    //                 "IconPhrase": "Intermittent clouds",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-11-29T07:00:00+02:00",
    //             "EpochDate": 1701234000,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 13.3,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Maximum": {
    //                     "Value": 22.4,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 2,
    //                 "IconPhrase": "Mostly sunny",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 35,
    //                 "IconPhrase": "Partly cloudy",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-11-30T07:00:00+02:00",
    //             "EpochDate": 1701320400,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 13.2,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Maximum": {
    //                     "Value": 23,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 3,
    //                 "IconPhrase": "Partly sunny",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 35,
    //                 "IconPhrase": "Partly cloudy",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-12-01T07:00:00+02:00",
    //             "EpochDate": 1701406800,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 13.2,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Maximum": {
    //                     "Value": 24,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 2,
    //                 "IconPhrase": "Mostly sunny",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 34,
    //                 "IconPhrase": "Mostly clear",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
    //         }
    //     ]
    // }
    // const data_f = {
    //     "Headline": {
    //         "EffectiveDate": "2023-11-27T07:00:00+02:00",
    //         "EffectiveEpochDate": 1701061200,
    //         "Severity": 7,
    //         "Text": "Noticeably cooler Monday",
    //         "Category": "cooler",
    //         "EndDate": "2023-11-27T19:00:00+02:00",
    //         "EndEpochDate": 1701104400,
    //         "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    //     },
    //     "DailyForecasts": [
    //         {
    //             "Date": "2023-11-27T07:00:00+02:00",
    //             "EpochDate": 1701061200,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 59.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                     "Value": 68.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 14,
    //                 "IconPhrase": "Partly sunny w/ showers",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Moderate"
    //             },
    //             "Night": {
    //                 "Icon": 35,
    //                 "IconPhrase": "Partly cloudy",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-11-28T07:00:00+02:00",
    //             "EpochDate": 1701147600,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 57.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                     "Value": 69.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 3,
    //                 "IconPhrase": "Partly sunny",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 34,
    //                 "IconPhrase": "Mostly clear",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-11-29T07:00:00+02:00",
    //             "EpochDate": 1701234000,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 58.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                     "Value": 72.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 3,
    //                 "IconPhrase": "Partly sunny",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 38,
    //                 "IconPhrase": "Mostly cloudy",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-11-30T07:00:00+02:00",
    //             "EpochDate": 1701320400,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 58.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                     "Value": 72.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 4,
    //                 "IconPhrase": "Intermittent clouds",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 34,
    //                 "IconPhrase": "Mostly clear",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
    //         },
    //         {
    //             "Date": "2023-12-01T07:00:00+02:00",
    //             "EpochDate": 1701406800,
    //             "Temperature": {
    //                 "Minimum": {
    //                     "Value": 60.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                     "Value": 74.0,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Day": {
    //                 "Icon": 1,
    //                 "IconPhrase": "Sunny",
    //                 "HasPrecipitation": false
    //             },
    //             "Night": {
    //                 "Icon": 34,
    //                 "IconPhrase": "Mostly clear",
    //                 "HasPrecipitation": false
    //             },
    //             "Sources": [
    //                 "AccuWeather"
    //             ],
    //             "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    //             "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
    //         }
    //     ]
    // }


    return data;
})

const dataSlice = createSlice({
    name: 'data',
    initialState: {

        currentCity: "Tel Aviv",
        currentKey: "215854",

        current: [],
        statusCurrent: 'idle',
        errorCurrent: null,

        allWeek: {},
        statusAllWeek: 'idle',
        errorAllWeek: null,

        search: {},
        statusSearch: "idle",
        errorSearch: null,

        darkMode: false

    },
    reducers: {

        changeKey: (state, code) => {
            state.currentKey = code.payload;
        },

        changeCity: (state, city) => {
            state.currentCity = city.payload;
        },

        changeDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrent.pending, (state) => {
                state.statusCurrent = 'loading';
            })
            .addCase(fetchCurrent.fulfilled, (state, action) => {
                state.statusCurrent = 'succeeded';
                state.current = action.payload;

            })
            .addCase(fetchCurrent.rejected, (state, action) => {
                state.statusCurrent = 'failed';
                state.errorCurrent = action.error.message;
            })
            .addCase(fetchAllWeek.pending, (state) => {
                state.statusAllWeek = 'loading';
            })
            .addCase(fetchAllWeek.fulfilled, (state, action) => {
                state.statusAllWeek = 'succeeded';
                state.allWeek = action.payload;
            })
            .addCase(fetchAllWeek.rejected, (state, action) => {
                state.statusAllWeek = 'failed';
                state.errorAllWeek = action.error.message;
            })
            .addCase(fetchSearchData.pending, (state) => {
                state.statusSearch = 'loading';
            })
            .addCase(fetchSearchData.fulfilled, (state, action) => {
                state.statusSearch = 'succeeded';
                state.search = action.payload;
            })
            .addCase(fetchSearchData.rejected, (state, action) => {
                state.statusSearch = 'failed';
                state.errorSearch = action.error.message;
            })
    },
});

export const { changeKey, changeCity, changeDarkMode } = dataSlice.actions;
export default dataSlice.reducer;
