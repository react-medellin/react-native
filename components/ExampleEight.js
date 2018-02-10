import React, { Component } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

const rows = [
  { id: 0, text: 'React' },
  { id: 1, text: 'Vue' },
  { id: 2, text: 'JavaScript' },
  { id: 3, text: 'Node' },
]

const extractKey = ({ id }) => id

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    width: '100%'
  },
  row: {
    borderWidth: 2,
    borderColor: '#333',
    padding: 10,
    marginBottom: 5,
  },
})

export default class App extends Component {
  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}
