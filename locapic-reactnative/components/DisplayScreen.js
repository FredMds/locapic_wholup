import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView , Dimensions} from 'react-native';
import {connect} from 'react-redux';


class DisplayScreen extends React.Component {
  render() {

  var screenWidth = Dimensions.get('window').width;

    var pictures = this.props.pictures.map(
    (picture, i)=>
    <Image
        key={i}
          style={{height:"100%",
              width:screenWidth}}
          source={{uri: 'http://10.2.1.13:3000/images/'+picture._id+'.jpg'}}
        />
  );


    return (
      <ScrollView
        horizontal={true}
        >
        {pictures}
      </ScrollView>
      );
    }
  }


function mapStateToProps(state) {
  return {pictures: state.pictureData }
}

export default connect(
    mapStateToProps,
    null
)(DisplayScreen);
