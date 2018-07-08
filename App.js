import React from 'react'
import { StyleSheet, TextInput, View, FlatList } from 'react-native'
import { List, ListItem, FormInput } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import Coin from './Coin'
import axios from 'axios'

class CoinList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        coins: [],
        cryptoList: []
      }
  }

  fetchCoins = () => {
    const url = 'https://min-api.cryptocompare.com/data/all/coinlist'
    axios.get(url)
      .then((response) => {
        let coinList = Object.entries(response.data.Data).map(coin => {
          return {name: coin[1].FullName}
        })

        this.setState({
          coins: coinList,
          cryptoList: coinList
        })
      })
      .catch((error) => console.log('error fetching coin list: ', error))
  }

  filterCoins = (text) => {
    let filteredCoins = this.state.coins.filter((coin) => coin.name.toLowerCase().includes(text.toLowerCase()))
    this.setState({
      cryptoList: filteredCoins
    })
  }

  renderSeparator = () => <View style={styles.separator}/>

  render() {
    return (
      <View style={styles.container}>
        <FormInput
          placeholder="Search for crypto..."
          onFocus={this.fetchCoins}
          onChangeText={this.filterCoins}
        />
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.cryptoList}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                containerStyle={{ borderBottomWidth: 0 }}
                onPress={() => this.props.navigation.navigate('Details', {name: item.name})}
              />
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: CoinList,
  Details: Coin
},{
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },

  separator: {
    height: 1,
    backgroundColor: '#CED0CE'
  }
})
