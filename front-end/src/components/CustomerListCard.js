import React from 'react';

class CustomerListCard extends React.Component {
  constructor(props) {
    super(props);
  }

  onCustomerClick = id => {
    this.props.callback(this.props.id);
  };
  render() {
    return (
      <div onClick={this.onCustomerClick} style={styles.cardStyle}>
        {this.props.name}
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676b69',
    color: 'white',
    height: 40,
    width: 160,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export default CustomerListCard;
