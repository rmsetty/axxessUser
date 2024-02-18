import { View, Text, Image, FlatList } from "react-native";
import BasketServiceItem from "../../components/BasketServiceItem";

import orders from "../../../assets/data/orders.json";


import styles from "./styles";

const order = orders[0];


const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.vendorImage }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.vendorName}</Text>
          <Text style={styles.subtitle}>{order.status} • 7 days ago</Text>

          <Text style={styles.menuTitle}>Your previous orders</Text>
          <View style={{ flex: 1, width: "100%", paddingTop: 25 }}>
      </View>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={order.orderInfo}
      renderItem={({ item }) => <BasketServiceItem basketService={item} />}
      />
  );
};

export default OrderDetails;