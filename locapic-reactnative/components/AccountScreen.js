import React from 'react';
import { View } from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import {connect } from 'react-redux';

class AccountScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

      <Avatar
        large
        rounded
        title={this.props.user.last_name[0].toUpperCase()+this.props.user.first_name[0].toUpperCase()}
        overlayContainerStyle={{backgroundColor: this.props.user.color}}
      />
      <Text h4>{this.props.user.last_name + " " +this.props.user.first_name }</Text>
      <Text h4>{this.props.user.mail}</Text>

    </View>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.userData }
}


export default connect(
    mapStateToProps,
    null
)(AccountScreen);
