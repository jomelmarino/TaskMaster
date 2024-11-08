import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

// SignupForm component handles user registration
export default function SignupForm({ navigation }) { 
  // State variables to store user inputs for username, email, password, and confirm password
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle the signup process
  const handleSignup = () => {
    // Basic validation to check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields."); // Show an alert if any field is empty
    } else if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match."); // Check if passwords match
    } else {
      Alert.alert("Signed Up", `Welcome, ${username}!`, [
        {
          text: "OK",
          onPress: () => navigation.navigate('Login'), // Navigate back to Login screen after signup
        },
      ]);

      // Add API call to handle signup if needed
    }
  };

  return (
    <View style={styles.container}>
      {/* Title for the Signup screen */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Input for Username */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername} // Update username state on change
      />

      {/* Input for Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address" // Shows email-friendly keyboard
        autoCapitalize="none" // Prevents auto-capitalization of email
        value={email}
        onChangeText={setEmail} // Update email state on change
      />

      {/* Input for Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry // Masks password text
        value={password}
        onChangeText={setPassword} // Update password state on change
      />

      {/* Input for Confirm Password */}
      <Text style={styles.label}>Confirm password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry // Masks confirm password text
        value={confirmPassword}
        onChangeText={setConfirmPassword} // Update confirm password state on change
      />

      {/* Signup Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Button to navigate to Login screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>Already have an account? <Text style={{ color: 'black', fontWeight: 'bold' }}>sign in</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for the SignupForm components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // White background
    justifyContent: 'center', // Center content vertically
  },
  label: {
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Center title text
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Light gray border
    borderRadius: 8, // Rounded corners
    marginBottom: 15,
    color: '#333', // Dark text color
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'black', // Black background for button
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 18,
    fontWeight: 'bold', // Bold font for Sign In text
  },
  signInText: {
    color: 'black', // Black text color for Sign In
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,

  },
});
