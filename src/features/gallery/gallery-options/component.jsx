import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Search from "@material-ui/icons/Search";
import React from "react";

import "./styles.scss";

function GalleryOptions(props) {
  const { search, region, handleSearchChange, handleRegionChange } = props;

  const regions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar",
  ];

  return (
    <div className="gallery-options">
      <FormControl className="gallery-options-search" variant="outlined">
        <OutlinedInput
          id="search"
          value={search}
          onChange={handleSearchChange}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder="Search for a country ..."
          name="search"
        />
      </FormControl>
      <div className="gallery-options-region">
        <Typography>Filter by region: </Typography>
        <FormControl variant="outlined">
          <Select
            id="region"
            value={region}
            onChange={handleRegionChange}
            name="region"
          >
            {regions.map((reg) => (
              <MenuItem key={reg} value={reg}>
                {reg}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default GalleryOptions;
