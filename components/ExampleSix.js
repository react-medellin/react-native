import React, { Component } from "react";
import { Slider, StyleSheet, Text, View } from "react-native";

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
      slider: 4.5
    };
  }

  handleChange = value => {
    this.setState({
      slider: value
    });
  };

  render() {
    const { slider } = this.state;

    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          maximumValue={10}
          minimumValue={0}
          onValueChange={this.handleChange}
          value={slider}
          step={0.5}
        />
        <Text>{slider}</Text>
      </View>
    );
  }
}
