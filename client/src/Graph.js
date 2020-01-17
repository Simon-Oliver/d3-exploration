import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Graph extends Component {
  componentDidMount() {
    const data = [2, 4, 2, 6, 8];
    this.drawBarChart(data);
  }
  drawBarChart(data) {}
  render() {
    return <div ref="canvas"></div>;
  }
}
