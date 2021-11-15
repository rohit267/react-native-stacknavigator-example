import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  useColorScheme,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Login({navigation}) {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spinner, setSpinner] = useState(false);

  function handleUsernameChange(e) {
    setError('');
    setUsername(e);
  }

  function handlePasswordChange(e) {
    setError('');
    setPassword(e);
  }

  function handleBtnLogin() {
    setError('');
    setSpinner(true);
    console.log(username, password);
    setTimeout(() => {
      if (username === 'USER1234' && password === 'password') {
        setUsername('');
        setPassword('');
        navigation.navigate('Home');
      } else {
        setError('Wrong userid or password');
      }
      setSpinner(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Spinner
        visible={spinner}
        textContent={'Please wait...'}
        textStyle={styles.spinnerTextStyle}
      />
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="userid is USER1234"
          placeholderTextColor="grey"
          onChangeText={handleUsernameChange}
          value={username}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Password is password"
          placeholderTextColor="grey"
          onChangeText={handlePasswordChange}
          value={password}
        />
        <Text style={styles.error}>{error}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleBtnLogin} style={styles.btn}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 54,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  btnTxt: {
    color: 'black',
  },
  textInput: {
    backgroundColor: '#fff',
    color: 'grey',
    marginBottom: 16,
    marginHorizontal: 16,
    paddingStart: 12,
    height: 56,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginHorizontal: 18,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
