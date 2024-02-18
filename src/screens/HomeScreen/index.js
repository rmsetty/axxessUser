import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TextInput, Text, TouchableOpacity } from 'react-native';
import VendorItem from '../../components/VendorItem';
import vendors from '../../../assets/data/vendors.json';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('');

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchText.toLowerCase()) &&
    (selectedSpecialty === '' || vendor.specialty === selectedSpecialty) &&
    (selectedInsuranceType === '' || vendor.insuranceType === selectedInsuranceType)
  );

  const specialties = ['Pediatrics', 'Radiology', 'Gynecology', 'Laboratory Services'];
  const insuranceTypes = [
    "Blue Cross Blue Shield",
    "UnitedHealthcare",
    "Medicade",
    "Medicare"];

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  const handleInsuranceTypeSelect = (insuranceType) => {
    setSelectedInsuranceType(insuranceType);
  };

  const handleClearFilter = () => {
    setSelectedSpecialty('');
    setSelectedInsuranceType('');
  };

  return (
    <View style={styles.page}>
      <TextInput
        style={styles.searchBar}
        placeholder="What are you looking for?"
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.filterContainer}>
        <View style={styles.filterItem}>
          <Text style={styles.pickerLabel}>Service Type:</Text>
          <View style={styles.dropdown}>
            {specialties.map((specialty) => (
              <TouchableOpacity
                key={specialty}
                style={[
                  styles.dropdownItem,
                  selectedSpecialty === specialty && styles.dropdownItemSelected,
                ]}
                onPress={() => handleSpecialtySelect(specialty)}
              >
                <Text style={styles.dropdownItemText}>{specialty}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.filterItem}>
          <Text style={styles.pickerLabel}>Insurance Type:</Text>
          <View style={styles.dropdown}>
            {insuranceTypes.map((insuranceType) => (
              <TouchableOpacity
                key={insuranceType}
                style={[
                  styles.dropdownItem,
                  selectedInsuranceType === insuranceType && styles.dropdownItemSelected,
                ]}
                onPress={() => handleInsuranceTypeSelect(insuranceType)}
              >
                <Text style={styles.dropdownItemText}>{insuranceType}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.clearFilterButton} onPress={handleClearFilter}>
            <Text style={styles.clearFilterButtonText}>Clear Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filteredVendors}
        renderItem={({ item }) => <VendorItem vendor={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:10,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterItem: {
    flex: 1,
    marginRight: 10,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center', 
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10, // Adjusted margin here
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemSelected: {
    backgroundColor: 'lightblue',
  },
  dropdownItemText: {
    fontSize: 14,
  },
  clearFilterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'darkblue',
    alignSelf: 'center', 
  },
  clearFilterButtonText: {
    color: 'darkblue',
    fontWeight: 'bold',
  },
});

