import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

  const VendorItem = ({ vendor }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("VendorDetails", { id: vendor.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.vendorContainer}>
      <Image
        source={{
          uri: vendor.image.startsWith("http")
            ? vendor.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{vendor.name}</Text>
          <Text style={styles.subtitle}>
             {vendor.description}
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{vendor.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default VendorItem;

const styles = StyleSheet.create({
  vendorContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});