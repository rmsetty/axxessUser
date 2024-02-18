import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ServiceListItem from "../../components/ServiceListItem";
import vendors from "../../../assets/data/vendors.json";
import services from "../../../assets/data/services.json";
import VendorHeader from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const vendor = vendors[0];


const VendorDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <VendorHeader vendor={vendor} />}
        data={vendor.services}
        renderItem={({ item }) => <ServiceListItem service={item} />}
        keyExtractor={(service) => service.name}
      />
    </View>
  );
};

export default VendorDetailsPage;

