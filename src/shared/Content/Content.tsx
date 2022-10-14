import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/stor";
import { getDates } from "../../utils/getDates";
import { getDays } from "../../utils/getDays";
import { getIcon } from "../../utils/getIcon";
import { getTime } from "../../utils/getTime";
import { PrecipitationIcon, PressureIcon, TemperIcon, WindIcon } from "../Icons";
import styles from "./content.css";

export function Content() {
  const city = useSelector<RootState, any>((state) => state.city);
  const weather = useSelector<RootState, any>((state) => state.weather);
  const weatherDays = useSelector<RootState, any>((state) => state.weatherFive);

  return (
    <div className={styles.contentContainer}>

      <div className={styles.contentContainerToday}>
        <div className={styles.contentContainerTodayWrap}>
          <h2 className={styles.contentContainerTodayTitle}>{Math.round(weather.temp)}°</h2>
          <p className={styles.contentContainerTodayDay}>Today</p>
        </div>
        <div className={styles.contentContainerTodayInfo}>
          <p className={styles.contentContainerTodayInfoText}>
            time:<span className={styles.contentContainerTodayInfoTextSpan}>{getTime()}</span>
          </p>
          <p className={styles.contentContainerTodayInfoText}>
            city:<span className={styles.contentContainerTodayInfoTextSpan}>{city.city}</span>
          </p>
        </div>
        <div className={styles.contentContainerTodayIcon}>{getIcon(weather.main)}</div>
      </div>

      <div className={styles.contentContainerDesc}>
        <div className={styles.contentContainerDescWrap}>
          <div className={styles.contentContainerDescWrapTemp}>
            <div className={styles.contentContainerDescWrapTempIcon}>
              <TemperIcon />
            </div>
            <p className={styles.contentContainerDescWrapTempText}>temperature</p>
            <p className={styles.contentContainerDescWrapTempTextInfo}>
              {Math.round(weather.temp)}° feels like {Math.round(weather.feels)}°
            </p>
          </div>

          <div className={styles.contentContainerDescWrapTemp}>
            <div className={styles.contentContainerDescWrapTempIcon}>
              <PressureIcon />
            </div>
            <p className={styles.contentContainerDescWrapTempText}>Pressure</p>
            <p className={styles.contentContainerDescWrapTempTextInfo}>{weather.pressure} mmHg</p>
          </div>

          <div className={styles.contentContainerDescWrapTemp}>
            <div className={styles.contentContainerDescWrapTempIcon}>
              <PrecipitationIcon />
            </div>
            <p className={styles.contentContainerDescWrapTempText}>Precipitation</p>
            <p className={styles.contentContainerDescWrapTempTextInfo}>{weather.main}</p>
          </div>

          <div className={styles.contentContainerDescWrapTemp}>
            <div className={styles.contentContainerDescWrapTempIcon}>
              <WindIcon />
            </div>
            <p className={styles.contentContainerDescWrapTempText}>Wind</p>
            <p className={styles.contentContainerDescWrapTempTextInfo}>{weather.speed} m/s</p>
          </div>
        </div>

        <div className={styles.contentContainerDescImg}></div>
      </div>

      <div className={styles.contentContainerWeek}>
        <div className={styles.contentContainerWeekWrap}>
          <div className={styles.contentContainerWeekWrapUp}>
            <p className={styles.contentContainerWeekWrapUpTitle}>Today</p>
            <p className={styles.contentContainerWeekWrapUpDate}>{getDates(weatherDays[0].date)}</p>
            <div className={styles.contentContainerWeekWrapUpIcon}>{getIcon(weatherDays[0].main)}</div>
          </div>
          <div className={styles.contentContainerWeekWrapDown}>
            <p className={styles.contentContainerWeekWrapUpTemp}>{Math.round(weatherDays[0].temp)}°</p>
            <p className={styles.contentContainerWeekWrapDownTemp}>{Math.round(weatherDays[0].feels)}°</p>
          </div>
          <p className={styles.contentContainerWeekWrapDownDec}>{weatherDays[0].main}</p>
        </div>

        <div className={styles.contentContainerWeekWrap}>
          <div className={styles.contentContainerWeekWrapUp}>
            <p className={styles.contentContainerWeekWrapUpTitle}>Tomorrow</p>
            <p className={styles.contentContainerWeekWrapUpDate}>{getDates(weatherDays[1].date1)}</p>
            <div className={styles.contentContainerWeekWrapUpIcon}>{getIcon(weatherDays[1].main1)}</div>
          </div>
          <div className={styles.contentContainerWeekWrapDown}>
            <p className={styles.contentContainerWeekWrapUpTemp}>{Math.round(weatherDays[1].temp1)}°</p>
            <p className={styles.contentContainerWeekWrapDownTemp}>{Math.round(weatherDays[1].feels1)}°</p>
          </div>
          <p className={styles.contentContainerWeekWrapDownDec}>{weatherDays[1].main1}</p>
        </div>

        <div className={styles.contentContainerWeekWrap}>
          <div className={styles.contentContainerWeekWrapUp}>
            <p className={styles.contentContainerWeekWrapUpTitle}>{getDays(weatherDays[2].date2)}</p>
            <p className={styles.contentContainerWeekWrapUpDate}>{getDates(weatherDays[2].date2)}</p>
            <div className={styles.contentContainerWeekWrapUpIcon}>{getIcon(weatherDays[2].main2)}</div>
          </div>
          <div className={styles.contentContainerWeekWrapDown}>
            <p className={styles.contentContainerWeekWrapUpTemp}>{Math.round(weatherDays[2].temp2)}°</p>
            <p className={styles.contentContainerWeekWrapDownTemp}>{Math.round(weatherDays[2].feels2)}°</p>
          </div>
          <p className={styles.contentContainerWeekWrapDownDec}>{weatherDays[2].main2}</p>
        </div>

        <div className={styles.contentContainerWeekWrap}>
          <div className={styles.contentContainerWeekWrapUp}>
            <p className={styles.contentContainerWeekWrapUpTitle}>{getDays(weatherDays[3].date3)}</p>
            <p className={styles.contentContainerWeekWrapUpDate}>{getDates(weatherDays[3].date3)}</p>
            <div className={styles.contentContainerWeekWrapUpIcon}>{getIcon(weatherDays[3].main3)}</div>
          </div>
          <div className={styles.contentContainerWeekWrapDown}>
            <p className={styles.contentContainerWeekWrapUpTemp}>{Math.round(weatherDays[3].temp3)}°</p>
            <p className={styles.contentContainerWeekWrapDownTemp}>{Math.round(weatherDays[3].feels3)}°</p>
          </div>
          <p className={styles.contentContainerWeekWrapDownDec}>{weatherDays[3].main3}</p>
        </div>

        <div className={styles.contentContainerWeekWrap}>
          <div className={styles.contentContainerWeekWrapUp}>
            <p className={styles.contentContainerWeekWrapUpTitle}>{getDays(weatherDays[4].date4)}</p>
            <p className={styles.contentContainerWeekWrapUpDate}>{getDates(weatherDays[4].date4)}</p>
            <div className={styles.contentContainerWeekWrapUpIcon}>{getIcon(weatherDays[4].main4)}</div>
          </div>
          <div className={styles.contentContainerWeekWrapDown}>
            <p className={styles.contentContainerWeekWrapUpTemp}>{Math.round(weatherDays[4].temp4)}°</p>
            <p className={styles.contentContainerWeekWrapDownTemp}>{Math.round(weatherDays[4].feels4)}°</p>
          </div>
          <p className={styles.contentContainerWeekWrapDownDec}>{weatherDays[4].main4}</p>
        </div>
      </div>
    </div>
  );
}
