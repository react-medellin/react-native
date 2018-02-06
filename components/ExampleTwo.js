import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "auto",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  squareBlue: {
    height: 100,
    width: 100,
    backgroundColor: "blue"
  },
  squareGreen: {
    height: 100,
    width: 100,
    backgroundColor: "green"
  }
});

export default class ExampleTwo extends Component {
  render() {
    return (
      <ScrollView style={styles.container} horizontal>
        <View style={styles.squareGreen}/>
        <View style={styles.squareBlue}/>
        <View style={styles.squareGreen}/>
        <View style={styles.squareBlue}/>
        <View style={styles.squareGreen}/>
        <View style={styles.squareBlue}/>
        <View style={styles.squareGreen}/>
        <View style={styles.squareBlue}/>
      </ScrollView>
    );
  }
}
