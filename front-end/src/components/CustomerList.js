import React, { Component } from 'react';

import CustomerListCard from './CustomerListCard';

function mapStateToProps(state) {
  return {};
}

class CustomerList extends Component {
  constructor(props) {
    super(props);
  }
  styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10
    }
  };
  onCustomerClick = customerId => {
    // console.log('list', id);
    this.props.callback(customerId);
  };
  render() {
    return (
      <div style={this.styles.container}>
        {this.props.listOfCustomers.map(customer => (
          <CustomerListCard
            key={customer.id}
            {...customer}
            callback={this.onCustomerClick}
          />
        ))}
      </div>
    );
  }
}

export default CustomerList;
