import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCity } from "../../store/cityAction";
import { RootState } from "../../store/stor";
import { addWeather, addWeatherFiveDays } from "../../store/weatherAction";
import { useTheme } from "../Hooks/useTheme";
import { ThemeIcon } from "../Icons";
import styles from "./header.css";
import { Select } from "./Select";

export function Header() {
  const [clickTheme, setClickTheme] = useState(false);
  const [isError, setIsError] = useState(false);
  const coordinate = useSelector<RootState, any>((state) => state.city);
  const city = useSelector<RootState, any>((state) => state.changeCity);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!clickTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [clickTheme]);

  async function getCoordinate(nameCity: string, limit: number = 1) {
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${nameCity}&limit=${limit}&appid=caad8f2b03950907a088f59e69ff3ee4`
      )
      .then((response) => {
        setIsError(false);
        dispatch(
          addCity(response.data[0].country, response.data[0].name, response.data[0].lat, response.data[0].lon)
        );
      })
      .catch((err) => {
        setIsError(true);
        if (err.response) {
          console.log("response error: ", err.message);

        } else if (err.request) {
          console.log("request error: ", err);
        } else {
          console.log("error");
        } 
      });
  }

  async function getWeather(lat: number, lon: number) {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=caad8f2b03950907a088f59e69ff3ee4`
      )
      .then((response) => {
        setIsError(false);
        const temp = response.data.main.temp;
        const feels = response.data.main.feels_like;
        const pressure = response.data.main.pressure;
        const speed = response.data.wind.speed;
        const deg = response.data.wind.deg;
        const main = response.data.weather[0].main;
        const timezone = response.data.timezone;
        dispatch(addWeather(temp, feels, pressure, speed, deg, main, timezone));
      })
      .catch((err) => {
        setIsError(true);
        if (err.response) {
          console.log("response error: ");
        } else if (err.request) {
          console.log("request error: ");
        } else {
          console.log("error");
        } 
      });
  }

  async function getWeatherFiveDays(lat: number, lon: number) {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=caad8f2b03950907a088f59e69ff3ee4`
      )
      .then((response) => {
        setIsError(false);
        dispatch(
          addWeatherFiveDays(
            response.data.list[1].dt_txt,
            response.data.list[1].main.temp,
            response.data.list[1].main.feels_like,
            response.data.list[1].weather[0].main,
            response.data.list[9].dt_txt,
            response.data.list[9].main.temp,
            response.data.list[9].main.feels_like,
            response.data.list[9].weather[0].main,
            response.data.list[17].dt_txt,
            response.data.list[17].main.temp,
            response.data.list[17].main.feels_like,
            response.data.list[17].weather[0].main,
            response.data.list[25].dt_txt,
            response.data.list[25].main.temp,
            response.data.list[25].main.feels_like,
            response.data.list[25].weather[0].main,
            response.data.list[33].dt_txt,
            response.data.list[33].main.temp,
            response.data.list[33].main.feels_like,
            response.data.list[33].weather[0].main
          )
        );
      })
      .catch((err) => {
        setIsError(true);
        if (err.response) {
          console.log("response error: ");
        } else if (err.request) {
          console.log("request error: ");
        } else {
          console.log("error");
        } 
      });
  }

  useEffect(() => {
    getCoordinate(city);
  }, [city]);

  useEffect(() => {
    if (coordinate.country !== "") {
      getWeather(coordinate.lat, coordinate.lon);
      getWeatherFiveDays(coordinate.lat, coordinate.lon);
    }
  }, [coordinate.country]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainerWrapper}>
        <button
          className={styles.headerContainerWrapperBtnTheme}
          onClick={() => {
            setClickTheme(!clickTheme);
          }}
        >
          <ThemeIcon />
        </button>
        <Select />
      </div>
      {isError && (
        <div className={styles.errorContainer}>
          <div className={styles.errorContainerInfo}>
            <h2 className={styles.errorContainerInfoTitle}>Sorry!!!</h2>
            <h2 className={styles.errorContainerInfoTitle}>Request limit exceeded.</h2>
            <h2 className={styles.errorContainerInfoTitle}>Try to come tomorrow</h2>
          </div>
        </div>
      )}
    </div>
  );
}
