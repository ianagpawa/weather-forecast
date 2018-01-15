import React, { Component } from 'react';
// import logo from './logo.svg';

import SearchBar from "./containers/search_bar";
import CurrentWeather from "./containers/current_weather";

export default class App extends Component {
  render() {
      return (
        <div>
            <SearchBar />
            <CurrentWeather />
        </div>
    );
  }
}
