import { ActionCreator } from "redux";

const ADD_CITY = "ADD_CITY";
const CHANGE_CITY = "CHANGE_CITY";

export type AddCityAction = {
  type: typeof ADD_CITY;
  country: string;
  city: string;
  lat: number;
  lon: number;
};

export const addCity: ActionCreator<AddCityAction> = (country, city, lat, lon) => ({
  type: ADD_CITY,
  country,
  city,
  lat,
  lon,
});

export type ChangeCityAction = {
  type: typeof CHANGE_CITY;
  changeCity: string;
};

export const changeCity: ActionCreator<ChangeCityAction> = (changeCity) => ({
  type: CHANGE_CITY,
  changeCity,
});
