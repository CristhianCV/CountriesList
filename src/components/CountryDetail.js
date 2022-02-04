import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import DetailText from "./DetailText";

class CountryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: null,
      borders: null,
      errorMessage: "",
    };
  }

  numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format(value);

  componentDidMount = () => {
    axios
      .get(
        `https://restcountries.com/v2/name/${this.props.match.params.id}?fullText=true`
      )
      .then((response) => {
        this.setState({
          country: response.data[0],
        });
        if (response.data[0].borders.length === 0) {
          return Promise.resolve([]);
        } else {
          return axios.get(
            `https://restcountries.com/v2/alpha?codes=${response.data[0].borders.join(
              ";"
            )}&fields=name,cioc`
          );
        }
      })
      .then((response) => {
        if (response === []) {
          this.setState({
            borders: response,
          });
        } else {
          this.setState({
            borders: response.data,
          });
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: "Error retreiving data." });
      });
  };

  handleBackButtonClick = () => {
    this.props.history.push("/");
  };

  handleChipClick = (name) => {
    console.log(name);
    // this.props.history.push("/country/" + name);
  };

  classes = {
    button: {
      textTransform: "none",
      minWidth: "120px",
    },
    title: {
      fontWeight: "700",
      textAlign: "left",
    },
    detail: {
      display: "flex",
      padding: "5px 0",
      alignItems: "center",
      flexWrap: "wrap",
    },
    detailTitle: {
      fontWeight: "700",
      paddingRight: "5px",
    },
  };

  render() {
    if (this.state.country) {
      const {
        name,
        nativeName,
        population,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        flag,
        region,
      } = this.state.country;
      return (
        <div className="country-details">
          <div className="country-details-options">
            <Button
              variant="contained"
              color="primary"
              style={this.classes.button}
              startIcon={<ArrowBack />}
              onClick={this.handleBackButtonClick}
            >
              Back
            </Button>
          </div>
          <div className="country-details-data">
            <div className="country-details-image">
              <img alt="flag" src={flag} />
            </div>
            <div className="country-details-text">
              <div className="country-details-text-title">
                <Typography
                  style={this.classes.title}
                  gutterBottom
                  variant="h5"
                >
                  {name}
                </Typography>
              </div>
              <div className="country-details-text-body1">
                <DetailText
                  padding={true}
                  text="Native Name"
                  value={nativeName}
                ></DetailText>
                <DetailText
                  padding={true}
                  text="Population"
                  value={this.numberFormat(population)}
                ></DetailText>
                <DetailText
                  padding={true}
                  text="Region"
                  value={region}
                ></DetailText>
                <DetailText
                  padding={true}
                  text="Sub Region"
                  value={subregion}
                ></DetailText>
                <DetailText
                  padding={true}
                  text="Capital"
                  value={capital}
                ></DetailText>
              </div>
              <div className="country-details-text-body2">
                <DetailText
                  padding={true}
                  text="Top Level Domain"
                  value={topLevelDomain}
                ></DetailText>
                <DetailText
                  padding={true}
                  text="Currencies"
                  value={currencies.map((currency) => currency.name).join(", ")}
                ></DetailText>
                <DetailText
                  padding={true}
                  text="Languages"
                  value={languages.map((language) => language.name).join(", ")}
                ></DetailText>
                <DetailText
                  padding={true}
                  text="Top Level Domain"
                  value={topLevelDomain}
                ></DetailText>
              </div>
              <div
                style={this.classes.detail}
                className="country-details-text-borders"
              >
                <Typography
                  style={this.classes.detailTitle}
                  variant="body2"
                  color="textPrimary"
                  component="p"
                >
                  Border Countries:
                </Typography>
                <div>
                  {this.state.borders &&
                    this.state.borders.map((border) => (
                      <Chip
                        key={border.cioc}
                        color="primary"
                        label={border.name}
                        onClick={() => this.handleChipClick(border.name)}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      if (this.state.errorMessage) {
        return <div>{this.state.errorMessage}</div>;
      } else {
        return <div>Loading...</div>;
      }
    }
  }
}

export default CountryDetail;
