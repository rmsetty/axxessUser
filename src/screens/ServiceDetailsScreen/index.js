import { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import vendors from "../../../assets/data/vendors.json";
import couriers from "../../../assets/data/couriers.json";
import { useRoute, useNavigation } from "@react-navigation/native";
import CourierListItem from "../../components/CourierListItem";

const service = vendors[0].services[0];
const courier = couriers[0];

const ServiceDetailsScreen = () => {
  const [quantity, setQuantity] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();

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
    <View style={styles.page}>
      <Text style={styles.name}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={45}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={45}
          color={"black"}
          onPress={onPlus}
        />
      </View>
      <FlatList
        data={couriers}
        renderItem={({ item }) => <CourierListItem courier={item} />}
        keyExtractor={(item) => item.id}
      />
      <Pressable
        onPress={() => navigation.navigate("User Calendar")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; ${getTotal()}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, 
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default ServiceDetailsScreen;