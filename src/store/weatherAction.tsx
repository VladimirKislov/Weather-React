import { ActionCreator } from "redux";

const ADD_WEATHER = "ADD_WEATHER";
const ADD_WEATHER_FIVE_DAYS = "ADD_WEATHER_FIVE_DAYS";

export type AddWeatherAction = {
  type: typeof ADD_WEATHER;
  temp: number;
  feels: number;
  pressure: number;
  speed: number;
  deg: number;
  main: string;
  timezone: number;
};

export const addWeather: ActionCreator<AddWeatherAction> = (
  temp,
  feels,
  pressure,
  speed,
  deg,
  main,
  timezone
) => ({
  type: ADD_WEATHER,
  temp,
  feels,
  pressure,
  speed,
  deg,
  main,
  timezone,
});

export type AddWeatherFiveDaysAction = {
  type: typeof ADD_WEATHER_FIVE_DAYS;
  date: string;
  temp: number;
  feels: number;
  main: string;
  date1: string;
  temp1: number;
  feels1: number;
  main1: string;
  date2: string;
  temp2: number;
  feels2: number;
  main2: string;
  date3: string;
  temp3: number;
  feels3: number;
  main3: string;
  date4: string;
  temp4: number;
  feels4: number;
  main4: string;
};

export const addWeatherFiveDays: ActionCreator<any> = (
  date,
  temp,
  feels,
  main,
  date1,
  temp1,
  feels1,
  main1,
  date2,
  temp2,
  feels2,
  main2,
  date3,
  temp3,
  feels3,
  main3,
  date4,
  temp4,
  feels4,
  main4
) => ({
  type: ADD_WEATHER_FIVE_DAYS,
  date,
  temp,
  feels,
  main,
  date1,
  temp1,
  feels1,
  main1,
  date2,
  temp2,
  feels2,
  main2,
  date3,
  temp3,
  feels3,
  main3,
  date4,
  temp4,
  feels4,
  main4,
});
