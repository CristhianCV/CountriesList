import Typography from "@material-ui/core/Typography";
import React from "react";

import "./styles.css";

function Detail(props) {
  return (
    <div className="detail">
      <Typography
        className="detail-title"
        variant="body2"
        color="textPrimary"
        component="p"
      >
        {props.text}:
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        component="p"
      >
        {props.value}
      </Typography>
    </div>
  );
}

export default Detail;
