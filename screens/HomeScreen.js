import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Success</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 20
  },
});
