import { View, Text, FlatList } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import vendors from "../../../assets/data/vendors.json";

const OrdersScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={vendors}
        renderItem={({ item }) => {
          console.log(item); 
          return <OrderListItem order={item} />;
        }}
      />
    </View>
  );
};

export default OrdersScreen;