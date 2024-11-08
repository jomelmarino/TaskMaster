// screens/GetStartedScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.leftSection}>
          <Image
            source={require('../assets/logo.png')} // Update path to your logo image
            style={styles.logo}
          />
          <Text style={styles.navTitle}>TASK MASTER</Text>
        </View>
        <View style={styles.navsubTitleContainer}>
          <Text style={styles.navsubTitle}>About Us</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Welcome to Our App</Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    marginTop: 20,  // Adds gap at the top of the navbar
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  navTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navsubTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 2,  // Controls space between text and underline
  },
  navsubTitle: {
    color: '#fff',
    fontSize: 15,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  getStartedButton: {
    width: 150,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40, // Adds rounded corners
    alignItems: 'center',
    borderWidth: 2,  // Black border
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',  // Text color to black for visibility on white background
    fontSize: 16,
    fontWeight: 'bold',
  },
});
