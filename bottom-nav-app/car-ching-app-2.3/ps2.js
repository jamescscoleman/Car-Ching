import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProfileItem = ({name}) => {
    return(
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>
    );
  };
  

const ProfileScreen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.doneButton}>Done</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <ProfileItem name="Account"/>
          <ProfileItem name="Settings"/>
          <ProfileItem name="Help"/>
          <ProfileItem name="FAQ"/>
          <ProfileItem name="Refer"/>
          <ProfileItem name="Add to Family"/>
          <ProfileItem name="Logout"/>


        </View>
          {/* ... other items /}
        </View>
        <View style={styles.section}>
          {/ ... other sections /}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        {/ ... bottom navigation items */}

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  doneButton: {
    fontSize: 16,
    color: 'green',
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 32,
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1, // Creates a single line separator effect
  },
  itemText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    padding: 16,
  },
  // Define styles for bottom navigation items here
});

export default ProfileScreen2;