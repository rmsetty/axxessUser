import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderLiveUpdates = ({ order, courier }) => {
  return (
    <View>
      <Text>Status: {order?.status || "loading"}</Text>
      <MapView style={styles.map} showsUserLocation>
        {courier?.lat && (
          <Marker
            coordinate={{ latitude: courier.lat, longitude: courier.lng }}
          >
            <View
              style={{
                padding: 5,
                backgroundColor: "green",
                borderRadius: 40,
              }}
            >
              <FontAwesome5 name="motorcycle" size={24} color="white" />
            </View>
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default OrderLiveUpdates;