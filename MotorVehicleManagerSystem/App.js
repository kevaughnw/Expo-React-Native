import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';

export default class App extends React.Component {
  state = {location: ''}
  updateLocation = (location) => {
    this.setState({location: location})
  }
  state = {type: ''}
  updateType = (type) => {
    this.setState({type: type})
  }

  handlePress = () => false

  render() {
    return (
      <View style={styles.container}>
        <Text>Location</Text>
        <Picker selectedValue={this.state.location} onValueChange = {this.updateLocation}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
          <Picker.Item label="On-Vessel" value="On-Vessel" />
          <Picker.Item label="Car Park 5" value="Car Park 5" />
        </Picker>

        <Text>Scan Type</Text>
        <Picker selectedValue={this.state.type} onValueChange = {this.onValueChange}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
