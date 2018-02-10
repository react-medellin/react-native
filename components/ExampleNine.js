import React, { Component } from 'react'
import { SectionList, Text, StyleSheet } from 'react-native'

const sections = [
  {
    id: 0,
    title: 'Front End',
    data: [
      { id: 0, text: 'JavaScript' },
      { id: 1, text: 'React' },
      { id: 2, text: 'React Native' },
    ]
  },
  {
    id: 1,
    title: 'Back End',
    data: [
      { id: 3, text: 'Node' },
      { id: 4, text: 'Express' },
    ]
  }
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
  header: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#333',
    color: 'white',
    fontWeight: 'bold',
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

  renderSectionHeader = ({ section }) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={extractKey}
      />
    );
  }
}
