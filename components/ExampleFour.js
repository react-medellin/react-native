import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  picker: {
    width: "100%",
    height: "auto"
  }
});

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'spanish',
    }
  }

  handleChange = (itemValue) => {
    this.setState({
      language: itemValue,
    });
  }

  render() {
    const { language } = this.state;

    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.language}
          onValueChange={this.handleChange}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="React" value="React" />
          <Picker.Item label="React Native" value="RN" />
        </Picker>
        <Text>{this.state.language}</Text>
      </View>
    );
  }
}
