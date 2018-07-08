import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Coin extends React.Component {
  render() {
    const { navigation } = this.props
    const name = navigation.getParam("name", "")

    return (
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 30
  }
})
