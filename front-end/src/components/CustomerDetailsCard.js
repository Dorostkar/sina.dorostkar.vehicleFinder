import React, { Component } from 'react';

class CustomerDetailsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, agrNo, make, model, carURL } = this.props;
    return (
      <div>
        <div id="header" style={this.styles.headerStyle}>
          <span style={this.styles.nameStyle}>Name: {name}</span>
          <span>Agrement number: {agrNo}</span>
        </div>
        <div id="carPic" style={this.styles.carPicStyle}>
          <img src={carURL} height="400" width="400" />
        </div>
        <div id="cardDetails" style={this.styles.cardDetailsStyle}>
          <span style={{ padding: 10 }}>{make}</span>
          <span style={{ padding: 10 }}>{model}</span>
        </div>
      </div>
    );
  }

  styles = {
    headerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#4d4f4e',
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15
    },
    carPicStyle: {
      textAlign: 'center'
    },
    cardDetailsStyle: {
      textAlign: 'center'
    }
  };
}

export default CustomerDetailsCard;
