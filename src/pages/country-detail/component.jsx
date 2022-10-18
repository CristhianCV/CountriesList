import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";

import Detail from "../../components/detail";
import MapTooltip from "../../features/map-tooltip";
import "./styles.scss";

const CountryDetail = () => {
  let history = useHistory();
  let { id } = useParams();

  const {
    isLoading: isLoadingCountry,
    isError: isErrorCountry,
    data: dataCountry,
  } = useQuery(
    ["byName", id],
    async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v2/name/${id}?fullText=true`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );

  const borders =
    dataCountry && dataCountry.length > 0 ? dataCountry[0].borders : null;

  const { data: dataBorders } = useQuery(
    ["borders", borders],
    async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v2/alpha?codes=${borders.join(
          ","
        )}&fields=name,cioc`
      );
      return data;
    },
    { refetchOnWindowFocus: false, enabled: !!borders }
  );

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format(value);

  const handleBackButtonClick = () => {
    history.push("/");
  };

  const handleChipClick = (name) => {
    history.push("/country/" + name);
  };

  if (isLoadingCountry) {
    return <h3 className="text-center">Loading...</h3>;
  }

  if (isErrorCountry) {
    return <h3 className="text-center">An error has ocurred...</h3>;
  }

  if (!dataCountry || dataCountry.length === 0) {
    return <h3 className="text-center">No country...</h3>;
  }

  return (
    <div className="country-details">
      <div className="country-details-options">
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={handleBackButtonClick}
        >
          Back
        </Button>
      </div>
      <div className="country-details-data">
        <div className="country-details-image">
          <img alt="flag" src={dataCountry[0].flag} />
        </div>
        <div className="country-details-text">
          <div className="country-details-text-title">
            <Typography gutterBottom variant="h5">
              {dataCountry[0].name}
            </Typography>
            <MapTooltip
              latitude={dataCountry[0].latlng[0]}
              longitude={dataCountry[0].latlng[1]}
            />
          </div>
          <div className="country-details-text-body1">
            <Detail
              text="Native Name"
              value={dataCountry[0].nativeName}
            ></Detail>
            <Detail
              text="Population"
              value={numberFormat(dataCountry[0].population)}
            ></Detail>
            <Detail text="Region" value={dataCountry[0].region}></Detail>
            <Detail text="Sub Region" value={dataCountry[0].subregion}></Detail>
            <Detail text="Capital" value={dataCountry[0].capital}></Detail>
          </div>
          <div className="country-details-text-body2">
            <Detail
              text="Top Level Domain"
              value={dataCountry[0].topLevelDomain}
            ></Detail>
            <Detail
              text="Currencies"
              value={dataCountry[0].currencies
                ?.map((currency) => currency.name)
                .join(", ")}
            ></Detail>
            <Detail
              text="Languages"
              value={dataCountry[0].languages
                ?.map((language) => language.name)
                .join(", ")}
            ></Detail>
            <Detail
              text="Top Level Domain"
              value={dataCountry[0].topLevelDomain}
            ></Detail>
          </div>
          <div className="country-details-text-borders">
            <Typography variant="body2" color="textPrimary" component="p">
              Border Countries:
            </Typography>
            <div>
              {dataBorders ? (
                dataBorders.map((border) => (
                  <Chip
                    key={border.cioc}
                    color="primary"
                    label={border.name}
                    onClick={() => handleChipClick(border.name)}
                    className="border-chip"
                  />
                ))
              ) : (
                <span>No borders</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
