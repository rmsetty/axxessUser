import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


const ServiceListItem = ({ service }) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);

  const onMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (service.serviceFee * quantity).toFixed(2);
  };

  return (
    
    <Pressable  
      onPress={() => navigation.navigate("ServiceDetails")}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {service.description}
        </Text>
        <Text style={styles.price}>$ {service.serviceFee}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: service.image }} style={styles.image} />
        <View style={styles.row}>
        </View>
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
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    height: 75,
    aspectRatio: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
});

export default ServiceListItem;