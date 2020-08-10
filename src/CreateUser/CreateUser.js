import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Snackbar, Button, Text, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function CreateUser() {
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
  const createUser = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      //criar usuario
    }
  };

  return (
    <View style={styles.container}>
      <Text>Criar usuario</Text>

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
      <Button mode="contained" onPress={createUser}>
        <Text>Criar usuario</Text>
      </Button>
      <Button onPress={() => navigation.goBack()}>Login</Button>
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

export default CreateUser;
