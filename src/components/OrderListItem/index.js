import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("OrderDetails", { id: order.id })}
      style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
    >
      <Image
        source={{ uri: order.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>2 items &#8226; $19.99</Text>
        <Text>7 days ago &#8226; {order.status} </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;