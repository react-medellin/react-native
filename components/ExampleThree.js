import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  buttonHighlight: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  button: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center"
  },
  buttonText: {
    padding: 20,
    color: "black"
  }
});

export default class ExampleThree extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Click here"
          color="#841584"
          onPress={this._onPressButton}
        />
        <TouchableHighlight style={styles.buttonHighlight} onPress={this._onPressButton} underlayColor="white">
          <View>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <View>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
