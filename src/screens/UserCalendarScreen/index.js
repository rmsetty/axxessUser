import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button,Pressable } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';

const UserCalendarScreen = () => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const navigation = useNavigation();

  const showPicker = () => {
    setIsPickerVisible(true);
  };

  const hidePicker = () => {
    setIsPickerVisible(false);
  };

  const handleConfirm = (datetime) => {
    setSelectedDateTime(datetime.toLocaleString());
    hidePicker();
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Work In Progress... Transitioning to Google Calendar API</Text>
      <Text style={styles.quantity}>Date & Time of Appointment</Text>
      <Button title="Pick Date and Time" onPress={showPicker} />
      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        pickerContainerStyle={styles.dateTimePickerContainer}
        textColor="#000" 
      />
      {selectedDateTime ? (
        <Text style={styles.selectedTime}>Selected: {selectedDateTime}</Text>
      ) : (
        <Text style={styles.selectedTime}>No date and time selected</Text>
      )}
      <CalendarList/>
      <Pressable
        onPress={() => navigation.navigate("User Notes")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Add Date & Timing
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  quantity: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 10,
    marginRight:10,
    marginLeft:10,
    alignContent:'center'
  },
  dateTimePickerContainer: {
    backgroundColor: 'red',
  },
  dateTimePickerText: {
    color: '#000',
  },
  dateTimePickerConfirmText: {
    color: '#000',
  },
  dateTimePickerCancelText: {
    color: '#000',
  },
  selectedTime: {
    color: "gray",
    marginLeft:15,
    marginBottom:15,
    marginTop:10,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    marginRight:12,
    marginLeft:12
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  dateTimePickerContainer: {
    backgroundColor: '#fff',
  },
});

export default UserCalendarScreen;
