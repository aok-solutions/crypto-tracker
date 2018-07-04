import React from 'react'
import { StyleSheet, TextInput, View, FlatList } from 'react-native'
import { List, ListItem, FormInput } from 'react-native-elements'

export default class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        cryptoList: [
          {name: 'BTC'},
          {name: 'ETH'},
          {name: 'ZRX'}
        ]
      }
  }

  renderSeparator = () => <View style={styles.separator}/>

  render() {
    return (
      <View style={styles.container}>
        <FormInput
          placeholder="Search for crypto..."
          containerStyle={{ marginBottom: 20, marginTop: 50 }}
        />
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.cryptoList}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
      </View>
    );
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
});
