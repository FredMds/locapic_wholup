import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Button, ScrollView, Image, Dimensions } from 'react-native';
import {Text} from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {

var screenWidth = Dimensions.get('window').width;

    return (
      <ImageBackground style={{flex:1}} source={require("../assets/zen.jpg")}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
            <Text h1 style={{color: "#99b696"}}>Loc&Pic</Text>
            <Text h3 style={{color: "#99b696"}}>Capture</Text>
            <Text h3 style={{color: "#99b696"}}>&</Text>
            <Text h3 style={{color: "#99b696"}}>Share</Text>
{/* slider */}



<ScrollView
  horizontal={true}
  >
    <Image style={{height:"100%",
        width:screenWidth}} source={require("../assets/zen.jpg")}/>
    <Image style={{height:"100%",
        width:screenWidth}} source={require("../assets/network.jpg")}/>
        <Image style={{height:"100%",
            width:screenWidth}} source={require("../assets/photo3.jpg")}/>
            <Image style={{height:"100%",
                width:screenWidth}} source={require("../assets/photo4.jpg")}/>

</ScrollView>

{/* slider */}


          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={{color: "#FFFFFF"}}>SignIn</Text>
          </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={{color: "#FFFFFF"}}>SignUp</Text>
            </TouchableOpacity>

          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
button:{
  backgroundColor:"#06600a",
  borderRadius:50,
  width:150,
  height: 40,
  justifyContent: "center",
  alignItems: "center",

}
})
