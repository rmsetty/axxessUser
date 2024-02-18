import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { CalendarList } from 'react-native-calendars';

const CourierCalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(orders);
  }, []);

  useEffect(() => {
    generateMarkedDates();
  }, [orders]);

  const generateMarkedDates = () => {
    const marked = {};

    orders.forEach((order) => {
      const { monthSchedule, daySchedule, yearSchedule } = order;

      if (monthSchedule && daySchedule && yearSchedule) {
        const date = `${yearSchedule}-${monthSchedule}-${daySchedule}`;
        if (!marked[date]) {
          marked[date] = { dots: [] };
        }
        marked[date].dots.push({
          key: date,
          color: 'green',
          selectedDotColor: 'white',
          selected: true,
        });
      }
    });

    setMarkedDates(marked);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Work In Progress... Transitioning to Google Calendar API</Text>
      <CalendarList      />
    </View>
  );
};

export default CourierCalendarScreen;