import React from "react";
import { Clouds } from "../shared/Icons/Clouds";
import { Rain } from "../shared/Icons/Rain";
import { Snow } from "../shared/Icons/Snow";
import { Sun } from "../shared/Icons/Sun";

export function getIcon(weatherMain: string) {
    switch (weatherMain) {
        case "Snow":
            return <Snow />;
        case "Clear":
            return <Sun />;
        case "Rain":
        case "Drizzle":
        case "Thunderstorm":
            return <Rain />
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fof":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
        case "Clouds":
            return <Clouds />
        default:
            return <Sun />
    }
}