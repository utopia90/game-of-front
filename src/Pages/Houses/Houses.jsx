import React, { useEffect, useState } from "react";
import axios from "axios";
import HousesGallery from "../Components/HousesGallery/HousesGallery.jsx";
import SearchBar from '../Components/Shared/SearchBar/SearchBar.jsx';

let allHouses = [];

export default function Houses() {
  const [localHouses, setLocalHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACK_URL + "houses").then((res) => {
      const housesdata = res.data;
      setLocalHouses(housesdata);
      allHouses = housesdata;
      setFilteredHouses(housesdata);
    });
  }, []);

  const filterHouses = (filterValues) => {
    const filteredLocalHouses = [];

    for (const house of allHouses) {
      if (house.name.includes(filterValues.name)) {
        filteredLocalHouses.push(house);
      }
    }
    setFilteredHouses(filteredLocalHouses);
  };

  return (
    <div>
      <SearchBar fnSubmit={filterHouses}/>
      <HousesGallery houses={filteredHouses} />
    </div>
  );
}
