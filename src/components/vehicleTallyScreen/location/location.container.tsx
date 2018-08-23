import React, { Component } from "react";
import { Button, Picker, StyleSheet, Text, View } from "react-native";
import { StateProps, IState } from "./type";

export default class Location extends Component<StateProps, IState> {
  constructor(props: StateProps) {
    super(props);

    this.state = {
      location: "",
      type: "",
      itemIndex: 0
    };
  }

  componentDidMount() {}

  updateLocation = (location: any) => {
    this.setState({ location: location });
  };
  updateType = (type: any) => {
    this.setState({ type: type });
  };

  handlePress = () => false;

  render() {
    return (
      <View style={styles.container}>
        <Text>Location</Text>
        <Picker
          selectedValue={this.state.location}
          onValueChange={this.updateLocation}
          style={{ height: 50, width: 100 }}
        >
          <Picker.Item label="On-Vessel" value="On-Vessel" />
          <Picker.Item label="Car Park 5" value="Car Park 5" />
        </Picker>

        <Text>Scan Type</Text>
        <Picker
          selectedValue={this.state.type}
          onValueChange={this.updateType}
          style={{ height: 50, width: 100 }}
        >
          <Picker.Item label="Entry" value="Entry" />
          <Picker.Item label="Exit" value="Exit" />
          <Picker.Item label="Released" value="Released" />
          <Picker.Item label="Park" value="Park" />
        </Picker>

        <Text>Scan Mode</Text>
        <Text>Scanning...</Text>
        <Button
          onPress={this.handlePress}
          title="Scan"
          color="#841584"
          accessibilityLabel="To Scan a barcode"
        />
        <Text>Total Units</Text>
        <Text>Scanned Data</Text>
      </View>
    );
  }
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
