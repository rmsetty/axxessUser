import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import couriers from "../../../assets/data/couriers.json";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const CourierHeader = ({ courier }) => {
  const navigation = useNavigation();
  const review = couriers[0].review[0];

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: courier.image }} style={styles.image} />
          <View style={styles.calendarContainer}>
            <Pressable onPress={() => navigation.navigate("Courier Calendar")}   style={styles.calendarButton}>
              <AntDesign name="calendar" size={18} color="white" />
              <Text style={styles.calendarButtonText}>Calendar</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{courier.name}</Text>
            <Text style={styles.company}>{courier.vendor}</Text>
            <Text style={styles.description}>{courier.description}</Text>
            <Text style={styles.dataText}>
              Delivery Fee: {courier.deliveryFee.toFixed(2)}
            </Text>
            <Text style={styles.dataText}>
              Min Delivery Time: {courier.minDeliveryTime} mins
            </Text>
            <Text style={styles.dataText}>
              Max Delivery Time: {courier.maxDeliveryTime} mins
            </Text>
            <Text style={styles.dataText}>
              Service Type: {courier.serviceType}
            </Text>
            <Text style={styles.dataText}>
              Price Range: {courier.priceRange}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={18} color="orange" />
            <Text style={styles.rating}>{courier.rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourierHeader;
