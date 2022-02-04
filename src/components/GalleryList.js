import React, { Component } from "react";
import CountrySummary from "./CountrySummary";
import axios from "axios";
import LazyLoad from "react-lazyload";

class GalleryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=numericCode,name,population,region,capital,flag"
      )
      .then((response) => {
        this.setState({
          countries: response.data.filter(
            (country) => country.numericCode !== ""
          ),
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: "Error retreiving data." });
      });
  }

  render() {
    const { search, region } = this.props.filters;
    return (
      <div className="gallery-list">
        {this.state.countries &&
          this.state.countries
            .filter(
              (country) =>
                country.name.toLowerCase().includes(search.toLowerCase()) &&
                (region === "All" || country.region === region)
            )
            .map((country) => (
              <LazyLoad height={200} key={country.numericCode}>
                <CountrySummary
                  key={country.numericCode}
                  country={country}
                ></CountrySummary>
              </LazyLoad>
            ))}
      </div>
    );
  }
}

export default GalleryList;
