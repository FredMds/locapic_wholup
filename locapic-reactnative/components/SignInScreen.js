import React from 'react';
import { View, ImageBackground } from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import {connect } from 'react-redux';

class SignInScreen extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {password : '',
                  mail : '',
                  eMessage:false,
                }
  }


handleSubmit = () => {

fetch('http://10.2.1.13:3000/signin?mail='+this.state.mail+'&password='+this.state.password
     )
     .then((resp) => resp.json())
     .then((user) => {
       if (user) {
          this.props.handleUserValid(user);

          fetch("http://10.2.1.13:3000/picture?userID="+user._id)
         .then((response) => {
           return response.json();
         }).then((pictures) => {
           console.log(pictures);
           this.props.handlePictures(pictures)
           this.props.navigation.navigate('Account')
         })
       } else {
         this.setState({eMessage:true})
       }

     })
     .catch(err => {
       console.log(err)
     })



   }

  render() {
   console.log(this.state.eMessage)
   return (
     <ImageBackground style={{flex:1}} source={require("../assets/zen.jpg")}>
     <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

         <FormLabel>Email</FormLabel>
         <FormInput onChangeText={(text) => this.setState({mail:text})}/>
         <FormLabel>Password</FormLabel>
         <FormInput onChangeText={(text) => this.setState({password:text})}/>
         {!this.state.eMessage ?
           <View></View>
           :
           <FormValidationMessage>Une erreur d'identification à eu lieu</FormValidationMessage>
         }

         <Button
           title ="Sign In"
           backgroundColor="#06600a"
           onPress={this.handleSubmit}
         />
       </View>
     </ImageBackground>
   );
 }
}


function mapDispatchToProps(dispatch) {
  return {
    handleUserValid: function(userData){
      dispatch({type: 'setUser', user:userData} )
    },
    handlePictures: function(pictureData){
      dispatch({type: 'setPicture', pictures:pictureData })
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SignInScreen);
