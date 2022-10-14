import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch } from "react-redux";
import { changeCity } from "../../../store/cityAction";

export function Select() {
  const options = [
    "London",
    "Bangkok",
    "Barcelona",
    "Buenos Aires",
    "Dubai",
    "Geneva",
    "Hong Kong",
    "Istanbul",
    "Jerusalem",
    "Lisbon",
    "Los Angeles",
    "Luxembourg",
    "Moscow",
    "Madrid",
    "Montreal",
    "New York",
    "Paris",
    "Prague",
    "Rio de Janeiro",
    "Rome",
    "Saint Petersburg",
    "San Francisco",
    "Shanghai",
    "Singapore",
    "Stockholm",
    "Sydney",
    "Tokyo",
    "Toronto",
    "Venice",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Washington",
  ];
  const dispatch = useDispatch();
  const [select, setSelect] = useState("London");
  const [arrayValues, setArrayValues] = useState(options);

  useEffect(() => {
    const newArr = options.filter((item) => {
      if (item !== select) {
        return item;
      }
    });
    setArrayValues(newArr);
  }, [select]);

  useEffect(() => {
    dispatch(changeCity(select));
  }, [select]);

  return (
      <Multiselect
        className="selector"
        isObject={false}
        onSelect={(event) => {
          setSelect(event[0]);
        }}
        options={arrayValues}
        selectedValues={[select]}
        singleSelect
      />
  );
}
