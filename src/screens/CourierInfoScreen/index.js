import React from "react";
import { View, StyleSheet, FlatList, Image, Text } from "react-native";
import couriers from "../../../assets/data/couriers.json";
import CourierInfoItem from "../../components/CourierInfoItem";
import CourierHeader from "./Header";






const courier = couriers[1];

const CourierInfoScreen = () => {






return (
    <View>
      <FlatList
        ListHeaderComponent={() => <CourierHeader courier={courier} />}
        data={courier.review}
        renderItem={({ item }) => <CourierInfoItem review={item} />}
        keyExtractor={(review) => review.name}
      />

    </View>
  );
};



export default CourierInfoScreen;