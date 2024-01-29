import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import MainAppbar from "../components/MainAppbar"
import { StyleSheet, View } from "react-native";


export default function Login(){

    const [formData, setFormData] = useState({username: '', password: ''})
    const [showError, setShowError] = useState(false)

    const validateAndSubmit = () => {
        setShowError(true);
        if (formData.username.length > 0 && formData.password.length > 8)
        setFormData({username: '', password: ''})
        setShowError(false)

    }
    return(
      <>
      <MainAppbar title="Login"/>
      <View style={styles.container}>
      <TextInput label='username'
       style={styles.input_field}
       value={formData.username}
       onChangeText={ text => setFormData({...formData,username: text})}
       error={formData.username.length===0 & showError}/>
      <TextInput label='password'
       style={styles.input_field}
       keyboardType='visible-password'
       value={formData.password}
       onChangeText={ text => setFormData({...formData,password: text})}
       error={formData.username.length===0 & showError}/>
      <Button mode="contained" 
      style={styles.button}
      onPress={validateAndSubmit}
      >Submit</Button>
      </View>
      </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        justifyContent: 'center'

    },
    input_field:{
        backgroundColor: '#fcfcfc',
        margin: (16,8,16,8)
    }, 
    button:{
        margin: (16,8,0,8)

    }
});