import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { useState } from "react";

const CourierListItem = ({ courier }) => {
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState(false);

  return (
    <Pressable
      style={styles.container}
    >
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isChecked}
          onPress={() => setChecked(!isChecked)}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{courier.name}</Text>
        <Text style={styles.vendor}>{courier.vendor}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {courier.description}
        </Text>
        <Text style={styles.services}>{courier.services.join(" • ")}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: courier.image }} style={styles.image} />
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={18} color="orange" />
          <Text style={styles.rating}>{courier.rating.toFixed(1)}</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Courier Info")}>
          <Text style={styles.reviewsButton}>More Info</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  checkboxContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center", 
  },
  image: {
    height: 75,
    aspectRatio: 1,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  vendor: {
    color: "gray",
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  services: {
    color: "gray",
  },
  moreInfoButton: {
    color: "black",
    textDecorationLine: "underline",
    paddingTop: 8,
  },
  reviewsButton: {
    color: "#1E90FF",
    paddingTop: 8,
    textDecorationLine: "underline",
  },
  rating: {
    marginLeft: 5,
  },
});

export default CourierListItem;
