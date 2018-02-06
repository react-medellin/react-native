import React, { Component } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20
  },
  slider: {
    width: "100%"
  }
});

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false
    };
  }

  handleChange = () => {
    this.setState({
      check: !this.state.check
    });
  };

  render() {
    const { check } = this.state;

    return (
      <View style={styles.container}>
        <Switch
          value={check}
          onValueChange={this.handleChange}
        />
        <Text>switch: {check.toString()}</Text>
      </View>
    );
  }
}
