import React from "react";
import Typography from "@material-ui/core/Typography";

function DetailText(props) {
  const classes = {
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
    detailNoPadding: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    detailTitle: {
      fontWeight: "700",
      paddingRight: "5px",
    },
  };

  return (
    <div style={props.padding ? classes.detail : classes.detailNoPadding}>
      <Typography
        style={classes.detailTitle}
        variant="body2"
        color="textPrimary"
        component="p"
      >
        {props.text}:
      </Typography>
      <Typography
        style={classes.detailText}
        variant="body2"
        color="textPrimary"
        component="p"
      >
        {props.value}
      </Typography>
    </div>
  );
}

export default DetailText;
