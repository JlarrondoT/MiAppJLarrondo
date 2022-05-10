import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { URL_API_AUTH, URL_API_SIGNIN } from '../constants/firebase.conf';

const Login = (input: { navigation: any }) => {
  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');

  const handleLogin = () => {
    // input.navigation.navigate('Home');
    createAccount().then((r) => console.log(r));
  };

  const createAccount = async () => {
    const response = await fetch(URL_API_SIGNIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: text,
        password: text2,
        returnSecureToken: true,
      }),
    });

    return await response.json();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.centerBox}>
          <Text style={styles.title}>App final Coderhouse</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#F7934C"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#F7934C"
            secureTextEntry={true}
            onChangeText={(newText) => setText2(newText)}
            defaultValue={text2}
          />
        </View>
        <TouchableOpacity style={styles.loginBox} onPress={() => handleLogin()}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
