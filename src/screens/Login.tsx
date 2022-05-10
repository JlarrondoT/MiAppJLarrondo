import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import { styles } from './styles';
import { URL_API_AUTH, URL_API_SIGNIN } from '../constants/firebase.conf';

const Login = (input: { navigation: any }) => {
  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');

  const handleLogin = (type: 'LOGIN' | 'CREATEACCOUNT') => {
    if (type === 'LOGIN') {
      login().then(
        (data) => {
          if (data?.registered) {
            input.navigation.navigate('Home');
          } else {
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
          }
        },
        (error) => {
          console.log(error);
          Alert.alert('Error', 'Usuario o contraseña incorrectos');
        }
      );
    } else {
      createAccount().then(
        (data) => {
          if (data?.idToken) {
            input.navigation.navigate('Home');
          } else {
            Alert.alert('Error', 'Error al crear el usuario');
          }
        },
        (error) => {
          console.log(error);
          Alert.alert('Error', 'Error al crear el usuario');
        }
      );
    }
  };

  const createAccount = async () => {
    const response = await fetch(URL_API_AUTH, {
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

  const login = async () => {
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
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.centerBox}>
          <Text style={styles.title}>App final Coderhouse</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType={'email-address'}
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
        <View style={styles.loginBox}>
          <TouchableOpacity onPress={() => handleLogin('LOGIN')}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLogin('CREATEACCOUNT')}>
            <Text style={styles.createAccountButton}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
