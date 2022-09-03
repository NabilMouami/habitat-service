import React, { useState,useEffect } from "react";
import "./Bois.css";
import bois from "../../utils/Bois";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function valuetext(value) {
  return value;
}

const FilterBois = () => {
  // const [value, setValue] = React.useState([70, 370]);
  const [list, setList] = useState(bois);

  console.log(list)

  const [selectedType, setSelectedType] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);

  const [selectedPrice, setSelectedPrice] = useState([70, 500]);

  const handleChange = (event, newValue) => {
    setSelectedPrice(newValue);
  };

  const handleSelectType = (event, value) =>
  !value ? null : setSelectedType(value);

  const applyFilters = () => {


  // initiale data bois before filter
  var updatedList = bois;


      // Category Filter
      if (selectedType) {
        updatedList = updatedList.filter(
          (item) => item.type === selectedType
        );
      }
  

  // Ml Filter
  const minPrice = selectedPrice[0];
  const maxPrice = selectedPrice[1];

  updatedList = updatedList.filter(
    (item) => item.ml >= minPrice && item.ml <= maxPrice
  );

  setList(updatedList);

  !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  }

  useEffect(() => {
    applyFilters();
  }, [selectedType, selectedPrice]);

  return (
    <div className="selects">
      <span>Types:</span>
      <select onChange={handleSelectType}>
        <option value="all">All</option>
        {bois.map((item) => {
          return (
            <option key={item.id} value={item.type}>
              {item.type}
            </option>
          );
        })}
      </select>
      <span>Marques:</span>
      <select>
        <option value="all">All</option>
        {bois.map((item) => {
          return (
            <option key={item.id} value={item.marque}>
              {item.marque}
            </option>
          );
        })}
      </select>
      <span>Quantites:</span>
      <select>
        <option value="all">All</option>
        {bois.map((item) => {
          return (
            <option key={item.id} value={item.quantite}>
              {item.quantite}
            </option>
          );
        })}
      </select>
      <span>Longeurs:</span>
      <select>
        <option value="all">All</option>
        {bois.map((item) => {
          return (
            <option key={item.id} value={item.long}>
              {item.long}
            </option>
          );
        })}
      </select>
      <div className="range">
        <Box sx={{ width: 600 }}>
          <span>ML:</span>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={selectedPrice}
            onChange={handleChange}
            min={70}
            max={500}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
    </div>
  );
};

export default FilterBois;
