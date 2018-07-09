import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ioClient from 'socket.io-client'
import CryptoCompare from './apiUtils'

export default class Coin extends React.Component {
  constructor(props) {
    super(props)
    const { navigation } = this.props
    const symbol = navigation.getParam("symbol", "")
    this.socket = ioClient('https://streamer.cryptocompare.com/')

    const currentAggregate = `5~CCCAGG~${symbol}~USD`
    const fullVolume = `11~${symbol}`
    const subscription = [ currentAggregate, fullVolume ]
    this.subscribeToCoinUpdates(subscription)

    this.state = {
      symbol: symbol,
      price: '',
      lastMarket: '',
      tradeId: '',
      subscription: subscription
    }
  }

  priceChanged = (flag) => flag == CryptoCompare.PRICEUP || flag == CryptoCompare.PRICEDOWN

  updateCoin = (message, keys) => {
    let values = message.split('~')

    let updatedCoin = keys.split('~').reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {})
    if (this.priceChanged(updatedCoin.Flag) && updatedCoin.Price) {
      this.setState({
        price: updatedCoin.Price
      })
    }
  }

  subscribeToCoinUpdates = (subscription) => {
    console.log('subscribing: ', subscription)

    this.socket.emit('SubAdd', { subs: subscription })
    this.socket.on('m', message => {
      console.log('message: ', message)
      let messageType = message.substring(0, message.indexOf('~'))
      switch (messageType) {
        case CryptoCompare.STATIC.TYPE.CURRENTAGG:
          this.updateCoin(message, CryptoCompare.CURRENT.KEYS)
          break
        case CryptoCompare.STATIC.TYPE.FULLVOLUME:
          this.updateCoin(message, CryptoCompare.FULLVOLUME.KEYS)
          break
        case CryptoCompare.STATIC.TYPE.LOADCOMPLETE:
          console.log('finished loading updates')
          break
        case CryptoCompare.STATIC.TYPE.BADFORMAT:
          console.log('bad format')
          break
        default:
          console.log('invalid message type')
      }
    })
  }

  unsubscribeFromUpdates = (subscription) => {
    console.log('unsubscribing: ', subscription)
    this.socket.emit('SubRemove', { subs: subscription })
  }

  componentWillUnmount() {
    this.unsubscribeFromUpdates(this.state.subscription)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.symbol}</Text>
        <Text>{this.state.price}</Text>
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
