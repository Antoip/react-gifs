import React, { Component } from 'react';

import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gifs = [
    { id: "VIK7SwKDyVITDLH4WY" },
    { id: "dyuc5DfSUg1RGg8P3p" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="ieaUAP90PNb2363dQt" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
