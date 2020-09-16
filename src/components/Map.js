import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 11.084164699999999,
        longitude: 76.9857916,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
});

export default Map;
