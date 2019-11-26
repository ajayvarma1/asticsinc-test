import React, { Component } from 'react';
// import { InputSearch } from '../uielements/input';
export default class extends Component {
//   componentDidMount() {

//   }
  render() {
    return (
        <embed
        type="application/pdf"
        src={this.props.src}
        id="pdfDocument"
        width="100%"
        height="100%" />
    );
  }
}
