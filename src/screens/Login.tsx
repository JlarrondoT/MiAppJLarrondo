import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Login = (input: { navigation: any }) => {
  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');

  const handleLogin = () => {
    input.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerBox}>
        <Text style={styles.title}>App final Coderhouse</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
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
    </View>
  );
};

export default Login;
