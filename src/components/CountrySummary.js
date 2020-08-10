import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import DetailText from "./DetailText";

const numberFormat = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(value);

function CountrySummary(props) {
  const { name, population, region, flag, capital } = props.country;
  return (
    <div className="country-summary">
      <Link to={"/country/" + name}>
        <Card variant="outlined">
          <CardActionArea>
            <CardMedia
              className="country-summary-image"
              image={flag}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                className="country-summary-title"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {name}
              </Typography>
              <DetailText
                padding={false}
                text="Population"
                value={numberFormat(population)}
              ></DetailText>
              <DetailText
                padding={false}
                text="Region"
                value={region}
              ></DetailText>
              <DetailText
                padding={false}
                text="Capital"
                value={numberFormat(population)}
              ></DetailText>
              <DetailText
                padding={false}
                text="Region"
                value={capital}
              ></DetailText>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}

export default React.memo(CountrySummary);
