import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/SearchCustomer';
import CustomerList from './components/CustomerList';
import CustomerDetailsCard from './components/CustomerDetailsCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      selectedCustomer: {}
    };
  }
  handleResult = searchResult => {
    console.log('app', searchResult);
    this.setState(() => ({
      searchResult: searchResult
    }));
  };

  onCustomerClick = customerId => {
    // console.log('App', customerId);

    const url = `https://izrite.com:5555/lead/${customerId}`;
    axios.get(url).then(response => {
      const selectedCustomer = response.data;
      this.setState(() => ({ selectedCustomer: selectedCustomer }));
      //get the car pic and added to state
      const picUrl = `https://izrite.com:5555/image/${
        this.state.selectedCustomer.capID
      }`;
      axios.get(picUrl).then(response => {
        const carUrl = response.data.url;

        this.setState(() => ({
          selectedCustomer: { ...this.state.selectedCustomer, carURL: carUrl }
        }));
      });
    });
  };
  render() {
    return (
      <div id="container" style={this.styles.containerStyle}>
        <div id="leftSidebar" style={this.styles.leftSidebarStyle}>
          <SearchComponent callback={this.handleResult} />
          <CustomerList
            listOfCustomers={this.state.searchResult}
            callback={this.onCustomerClick}
          />
        </div>
        <div id="rightSideBar" style={this.styles.rightSideBarStyle}>
          {Object.keys(this.state.selectedCustomer).length !== 0 ? (
            <CustomerDetailsCard {...this.state.selectedCustomer} />
          ) : (
            <div style={this.styles.messageStyle}>
              <span>Please use left sidebar to find the customer</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    leftSidebarStyle: {
      order: 1,
      flexGrow: 1,
      minHeight: 400,

      borderRightStyle: 'solid',
      borderBottomStyle: 'solid',
      borderWidth: 1,
      overflowY: 'scroll',
      overflow: 'auto'
    },
    rightSideBarStyle: {
      order: 2,
      flexGrow: 6
    },
    messageStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
  };
}

export default App;
