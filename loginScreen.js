import React from 'react'
import {View,TouchableOpacity,Text,TextInput,Alert,StyleSheet} from 'react-native'
export default class LoginScreen extends  React.Component{
constructor(){
    super();
    this.state = {emailID:'',password:''}
}
login = async(email,password)=>{
    console.log("insideLogin")
if(email&&password){
    const response = await firebase.auth().signInWithEmailAndPassword(email,password)
    if(response){
        console.log("insideresponse")
        this.props.navigation.navigate('Transaction')
    }
}

}
render(){
    return(

        <View>
        <View>
            <TextInput style = {{height:40,width:300,fontSize:20,borderWidth:1.5}}
            placeholder = "abc@example.com"
            keyboardType = "email-address"
            onChangeText = {(text)=>{this.setState({emailID:text})}}
            ></TextInput>
            <TextInput style = {{height:40,width:300,fontSize:20,margin:20,borderWidth:1.5}}
            placeholder = "enter Password"
            secureTextEntry = {true}
            onChangeText = {(text)=>{this.setState({emailID:text})}}></TextInput>
        </View>
        <View>
            <TouchableOpacity style = {{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
            onPress = {()=>{this.login(this.state.emailID,this.state.password)}}>
        <Text>Login</Text>
        
    </TouchableOpacity></View></View>
)

}

}

