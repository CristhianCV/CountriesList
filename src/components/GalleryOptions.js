import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

function GalleryOptions(props) {
  const { search, region } = props.filters;
  const handleFilterChange = props.handleFilterChange;

  return (
    <div className="gallery-options">
      <FormControl className="gallery-options-search" variant="outlined">
        <OutlinedInput
          id="search"
          value={search}
          onChange={handleFilterChange}
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
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={region}
            onChange={handleFilterChange}
            name="region"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
            <MenuItem value="Polar">Polar</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default GalleryOptions;
