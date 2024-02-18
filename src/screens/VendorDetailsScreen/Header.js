import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import vendors from "../../../assets/data/vendors.json";
import { useNavigation } from "@react-navigation/native";
import ServiceListItem from "../../components/ServiceListItem";

const VendorHeader = ({ vendor }) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const service = vendors[0].services[0];
  const getTotal = () => {
    return (service.serviceFee * quantity).toFixed(2);
  };
  return (
    <View style={styles.page}>
      <Image source={{ uri: vendor.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{vendor.name}</Text>
        <Text style={styles.subtitle}>
          {vendor.description}
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default VendorHeader;

