import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/stor";

export function getTime() {
  const weather = useSelector<RootState, any>((state) => state.weather);
  if (weather.timezone === 0) return;

  const date = new Date();
  const dateMil = Date.now();
  const a = dateMil + date.getTimezoneOffset() * 60000;
  const b = a + weather.timezone * 1000;

  return new Date(b).toLocaleTimeString().slice(0, -3);
}
