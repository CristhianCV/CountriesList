import React, { useEffect, useState } from "react";
import { forceCheck } from "react-lazyload";

import GalleryList from "../../features/gallery/gallery-list";
import GalleryOptions from "../../features/gallery/gallery-options";
import "./styles.css";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    forceCheck();
  }, [search, region]);

  return (
    <div className="dashboard">
      <GalleryOptions
        search={search}
        handleSearchChange={handleSearchChange}
        region={region}
        handleRegionChange={handleRegionChange}
      ></GalleryOptions>
      <GalleryList search={search} region={region}></GalleryList>
    </div>
  );
}

export default Dashboard;
