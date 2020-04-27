import React from "react";
import "./scss/style.scss";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import cimage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img className="image" src={cimage} alt="COVID-19"></img>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
