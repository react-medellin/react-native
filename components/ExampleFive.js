import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20,
  },
  input: {
    width: "100%",
    marginVertical: 20,
    borderBottomColor: "#333",
    borderBottomWidth: 1
  }
});

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleChange = text => {
    this.setState({
      text
    });
  };

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleChange}
          placeholder="input"
          multiline={true}
        />
        <Text>{text}</Text>
      </View>
    );
  }
}
