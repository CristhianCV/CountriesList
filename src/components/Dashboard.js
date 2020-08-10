import React, { Component } from "react";
import GalleryOptions from "./GalleryOptions";
import GalleryList from "./GalleryList";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      region: "All",
    };
  }

  handleFilterChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="dashboard">
        <GalleryOptions
          handleFilterChange={this.handleFilterChange}
          filters={this.state}
        ></GalleryOptions>
        <GalleryList filters={this.state}></GalleryList>
      </div>
    );
  }
}

export default Dashboard;
