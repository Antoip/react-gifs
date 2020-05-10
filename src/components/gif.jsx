import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200w.webp`;
    return (
      <div className="gif" src={src} />
      );
  }
}

export default Gif;
