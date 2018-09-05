import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./CheckBox/checkBox";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Checkbox size={30} checked={true} color="#0275d8" label="Checkbox" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  }
});
