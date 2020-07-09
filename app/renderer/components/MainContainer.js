import React, { useState, useEffect, useRef } from 'react';
import ContentManager from './ContentManager';
import ReactDOM from 'react-dom';

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    console.log(this.props.driver);
    return (
      <div ref={this.myRef} className="main-container">
        <ContentManager myRef={this.myRef} driver={this.props.driver} />
      </div>
    );
  }
}
