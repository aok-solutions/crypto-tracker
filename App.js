import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder = "Search for Crypto..."
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 50
  },

  input: {
    height: 40,
    width: '80%',
    borderColor: '#fff',
    borderBottomColor: '#ddd',
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 15
  }
});
