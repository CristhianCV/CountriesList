import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

import Detail from "../../../components/detail";
import "./styles.scss";

function GalleryItem(props) {
  const { name, population, region, flag, capital } = props.country;

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format(value);

  return (
    <div className="gallery-item">
      <Link to={"/country/" + name}>
        <Card variant="outlined">
          <CardActionArea>
            <div className="gallery-item-image">
              <CardMedia image={flag} title="Contemplative Reptile" />
            </div>
            <CardContent>
              <Typography
                className="gallery-item-title"
                gutterBottom
                variant="h5"
              >
                {name}
              </Typography>
              <Detail
                text="Population"
                value={numberFormat(population)}
              ></Detail>
              <Detail text="Region" value={region}></Detail>
              <Detail text="Capital" value={capital}></Detail>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}

export default React.memo(GalleryItem);
