import { AnyAction, Reducer } from "redux";

const ADD_CITY = "ADD_CITY";
const ADD_WEATHER = "ADD_WEATHER";
const CHANGE_CITY = "CHANGE_CITY";
const ADD_WEATHER_FIVE_DAYS = "ADD_WEATHER_FIVE_DAYS";

export type RootState = {
  city: {
    country: string;
    city: string;
    lat: number;
    lon: number;
  };
  weather: {
    temp: number;
    feels: number;
    pressure: number;
    speed: number;
    deg: number;
    main: string;
    timezone: number;
  };
  weatherFive: [
    { date: string; temp: number; feels: number; main: string },
    { date1: string; temp1: number; feels1: number; main1: string },
    { date2: string; temp2: number; feels2: number; main2: string },
    { date3: string; temp3: number; feels3: number; main3: string },
    { date4: string; temp4: number; feels4: number; main4: string }
  ];
  changeCity: string;
};

const initialState: RootState = {
  city: {
    country: "",
    city: "",
    lat: 0,
    lon: 0,
  },
  weather: {
    temp: 0,
    feels: 0,
    pressure: 0,
    speed: 0,
    deg: 0,
    main: "",
    timezone: 0,
  },
  weatherFive: [
    { date: '', temp: 0, feels: 0, main: '' },
    { date1: '', temp1: 0, feels1: 0, main1: '' },
    { date2: '', temp2: 0, feels2: 0, main2: '' },
    { date3: '', temp3: 0, feels3: 0, main3: '' },
    { date4: '', temp4: 0, feels4: 0, main4: '' }
  ],
  changeCity: 'London',
};

export const RootReducer: Reducer<RootState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        city: {
          country: action.country,
          city: action.city,
          lat: action.lat,
          lon: action.lon,
        },
      };
    case ADD_WEATHER:
      return {
        ...state,
        weather: {
          temp: action.temp,
          feels: action.feels,
          pressure: action.pressure,
          speed: action.speed,
          deg: action.deg,
          main: action.main,
          timezone: action.timezone,
        },
      };
    case CHANGE_CITY:
      return {
        ...state,
        changeCity: action.changeCity
      }
    case ADD_WEATHER_FIVE_DAYS:
      return {
        ...state,
        weatherFive: [
          { date: action.date, temp: action.temp, feels: action.feels, main: action.main },
          { date1: action.date1, temp1: action.temp1, feels1: action.feels1, main1: action.main1 },
          { date2: action.date2, temp2: action.temp2, feels2: action.feels2, main2: action.main2 },
          { date3: action.date3, temp3: action.temp3, feels3: action.feels3, main3: action.main3 },
          { date4: action.date4, temp4: action.temp4, feels4: action.feels4, main4: action.main4 },
        ],
      };
    default:
      return state;
  }
};
