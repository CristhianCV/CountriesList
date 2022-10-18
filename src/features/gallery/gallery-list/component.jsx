import axios from "axios";
import React from "react";
import LazyLoad from "react-lazyload";
import { useQuery } from "react-query";

import GalleryItem from "../gallery-item";
import "./styles.scss";

const GalleryList = (props) => {
  const { search, region } = props;

  const { isLoading, isError, data } = useQuery(
    "all",
    async () => {
      const { data } = await axios.get(
        "https://restcountries.com/v2/all?fields=numericCode,name,population,region,capital,flag"
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <h3 className="text-center">Loading...</h3>;
  }

  if (isError) {
    return <h3 className="text-center">An error has ocurred...</h3>;
  }

  return (
    <div className="gallery-list">
      {data &&
        data
          .filter(
            (country) =>
              country.name.toLowerCase().includes(search.toLowerCase()) &&
              (region === "All" || country.region === region)
          )
          .map((country) => (
            <LazyLoad height={200} key={country.numericCode}>
              <GalleryItem country={country}></GalleryItem>
            </LazyLoad>
          ))}
    </div>
  );
};

export default GalleryList;
