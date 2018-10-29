import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import {FormLabel, FormInput} from 'react-native-elements';
import {connect } from 'react-redux';


class SignUpScreen extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {first_name : '',
                  last_name : '',
                  password : '',
                  mail : '',
                }
  }

  handleSubmit(){

    var ctx = this;

    fetch('http://10.2.1.13:3000/signup', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `last_name=${this.state.last_name}&first_name=${this.state.first_name}&mail=${this.state.mail}&password=${this.state.password}`
    }).then((response) => {
      console.log(response);
      return response.json();
    }).then((user) => {
      ctx.props.handleUserValid(user)
      ctx.props.navigation.navigate('Account')
    })
    .catch(err => {
      console.log(err)
    })
  }


render() {
   return (
<ImageBackground style={{flex:1}} source={require("../assets/zen.jpg")}>
     <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

       <FormLabel>First Name</FormLabel>
       <FormInput onChangeText={(text) => this.setState({first_name:text})}/>
       <FormLabel>Last Name</FormLabel>
       <FormInput onChangeText={(text) => this.setState({last_name:text})}/>
       <FormLabel>Email</FormLabel>
       <FormInput onChangeText={(text) => this.setState({mail:text})}/>
       <FormLabel>Password</FormLabel>
       <FormInput onChangeText={(text) => this.setState({password:text})}/>

       <Button
         title="Sign Up"
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
      dispatch({type: 'setUser', user:userData })
    }
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

export default connect(
    null,
    mapDispatchToProps
)(SignUpScreen);
