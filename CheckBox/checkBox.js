import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  Image
} from "react-native";

import PropTypes from "prop-types";

export default class Checkbox extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: null,
      label: "unchecked"
    };
  }

  componentWillMount() {
    if (this.props.checked) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }

  toggleState(key, label) {
    this.setState({ checked: !this.state.checked, label: "checked" });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.toggleState.bind(
          this,
          this.props.keyValue,
          this.props.label
        )}
        underlayColor="transparent"
        style={styles.checkBoxButton}
      >
        <View style={styles.checkBoxHolder}>
          <View
            style={{
              width: this.props.size,
              height: this.props.size,
              backgroundColor: this.props.color,
              padding: 2
            }}
          >
            {this.state.checked ? (
              <View style={styles.checkedView}>
                <Image
                  source={require("./assets/check.png")}
                  style={styles.checkedImage}
                />
              </View>
            ) : (
              <View style={styles.uncheckedView} />
            )}
          </View>
          <Text style={[styles.checkBoxLabel, { color: this.props.color }]}>
            {this.props.label}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  selectedArrayItemsBtn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignSelf: "stretch"
  },

  btnText: {
    color: "white",
    textAlign: "center",
    alignSelf: "stretch",
    fontSize: 18
  },

  checkBoxButton: {
    marginVertical: 10
  },

  checkBoxHolder: {
    flexDirection: "row",
    alignItems: "center"
  },

  checkedView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  checkedImage: {
    height: "80%",
    width: "80%",
    tintColor: "white",
    resizeMode: "contain"
  },

  uncheckedView: {
    flex: 1,
    backgroundColor: "white"
  },

  checkBoxLabel: {
    fontSize: 17,
    paddingLeft: 10
  }
});

Checkbox.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  size: 30,
  color: "#636c72",
  label: "Default",
  checked: false
};
