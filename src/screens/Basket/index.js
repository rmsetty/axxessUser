import { View, Text, StyleSheet, FlatList, Pressable, TouchableOpacity } from "react-native";
import BasketServiceItem from "../../components/BasketServiceItem";
import { useNavigation } from "@react-navigation/native";
import orders from "../../../assets/data/orders.json";
import { FontAwesome } from '@expo/vector-icons';
const order = orders[0];


const Basket = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{order.userName}'s Basket</Text>
        <Pressable
          onPress={() => navigation.navigate("VendorDetails")}
          style={styles.buttonOne}
        >
          <Text style={styles.buttonText}>Add more</Text>
        </Pressable>
        <TouchableOpacity>
          <FontAwesome name="trash-o" size={20} color="darkblue" marginHorizontal= {10} />
      </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19, paddingBottom:15 }}>
        Your orders for {order.vendorName}
      </Text>
      <FlatList
        data={order.orderInfo}
        renderItem={({ item }) => <BasketServiceItem basketService={item} />}
      />

      <View style={styles.separator} />

      <Pressable
        onPress={() => navigation.navigate("History")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create Order</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 15,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    flex: 1,
    fontSize: 24,
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
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  buttonOne: {
    backgroundColor: "black",
    padding: 5,
    alignItems: "center",
    marginHorizontal:10,
    borderRadius:5,
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
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default Basket;
