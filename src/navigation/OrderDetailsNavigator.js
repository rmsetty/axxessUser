import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderDetails from "../screens/OrderDetails";
import OrderLiveChat from "../screens/OrderLiveChat";
import OrderLiveUpdates from "../screens/OrderLiveUpdates";
import OrderCourierManagement from "../screens/OrderCourierManagement";


const Tab = createMaterialTopTabNavigator();

const OrderDetailsNavigator = ({ route }) => {
  const id = route?.params?.id;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Details">{() => <OrderDetails id={id} />}</Tab.Screen>

      <Tab.Screen name="Updates">
        {() => <OrderLiveUpdates id={id} />}
      </Tab.Screen>
      <Tab.Screen name="Courier">
        {() => <OrderCourierManagement id={id} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default OrderDetailsNavigator;
