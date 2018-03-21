import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SearchCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { lastName: '', result: [] };
  }
  styles = {
    titleStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4d4f4e',
      color: 'white',
      marginBottom: 10,
      height: 50
    },
    searchComponentStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10
    }
  };

  lastNameChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      lastName: value
    }));
    this.searchCustomer();
  };
  searchCustomer = () => {
    const url = `https://izrite.com:5555/leads?page=1&name=${
      this.state.lastName
    }`;
    console.log(url);
    const props = this.props;
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState(() => ({ result: response.data }));
        props.callback(this.state.result);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <div style={this.styles.titleStyle}>
          <span>Search Customer</span>
        </div>
        <div style={this.styles.searchComponentStyle}>
          <input type="text" id="txtLastName" onChange={this.lastNameChange} />
          <button id="btnSearch" onClick={this.searchCustomer}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchCustomer;
