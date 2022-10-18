import { ClickAwayListener, IconButton, Tooltip } from "@material-ui/core";
import { Room } from "@material-ui/icons";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "./styles.scss";

const MapTooltip = ({ latitude, longitude }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <MapContainer
              center={[latitude, longitude]}
              zoom={4}
              scrollWheelZoom={false}
              className="map-tooltip"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]}></Marker>
            </MapContainer>
          }
        >
          <IconButton onClick={handleTooltipOpen}>
            <Room />
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default MapTooltip;
