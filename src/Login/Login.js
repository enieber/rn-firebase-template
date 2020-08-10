import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Snackbar, Button, Text, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { routers } from '../navigationRouters'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    isVisible: false,
    message: '',
  })
  const navigation = useNavigation();

  const isValidEmail = (emailToValidate) => {
    if (!emailToValidate) {
      setError({
        isVisible: true,
        message: "O campo email é obrigatorio"
      })
      return false;
    }
    if (emailToValidate.length > 4) {
      setError({
        isVisible: true,
        message: "Email invalido"
      })
      return true;
    }
    return false;
  };

  const isValidPassword = (passowrdToValidate) => {
    if (!passowrdToValidate) {
      setError({
        isVisible: true,
        message: "O campo senha é obrigatorio"
      })
      return false;
    }
    if (passowrdToValidate.length < 4) {
      setError({
        isVisible: true,
        message: "A senha tem que ser maior que 4 digitos"
      })
      return false;
    }

    return true;
  };

  const sign = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      //fazer login
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tela de login</Text>
      <TextInput
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        label="Senha"
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button mode="contained" onPress={sign}>
        <Text>Logar</Text>
      </Button>
      <Button onPress={() => navigation.navigate(routers.createUser)}>Cadastrar</Button>
      <Snackbar
        visible={error.isVisible}
        onDismiss={() => setError({
          ...error,
          isVisible: false
        })}>
        {error.message}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});

export default Login;
