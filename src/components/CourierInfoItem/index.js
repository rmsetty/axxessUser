import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CourierInfoItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{review.name}</Text>
      <Text style={styles.rating}>
        Courier Rating: {review.courierRating.toFixed(1)}
      </Text>
      <Text style={styles.rating}>
        Vendor Rating: {review.vendorRating.toFixed(1)}
      </Text>
      <View style={styles.serviceContainer}>
        <Text style={styles.label}>Service:</Text>
        <Text style={styles.service}>{review.service}</Text>
        </View>      
        <Text style={styles.description}>{review.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: "gray",
    marginHorizontal:10
  },
  serviceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  label: {
    marginRight: 5,
    fontWeight: "bold",
  },
  service: {
    fontSize: 14,
    textDecorationLine: "underline",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default CourierInfoItem;