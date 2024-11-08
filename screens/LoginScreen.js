import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';


// Import logos
import googleLogo from '../assets/google.png';
import githubLogo from '../assets/github.png';

export default function LoginForm({ navigation }) {
  // State variables to hold email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login with email and password
  const handleLogin = () => {
    if (!email || !password) {
      // If either email or password is missing, show an alert
      Alert.alert("Error", "Please enter both email and password.");
    } else {
      // Otherwise, show a success alert and navigate to the main screen
      Alert.alert("Logged In", `Welcome, ${email}!`, [
        {
          text: "OK",
          onPress: () => navigation.navigate('Main'), // Navigate to 'Main' screen
        },
      ]);
    }
  };

  // Function to simulate Google login
  const handleGoogleLogin = () => {
    Alert.alert('Google Sign-In', 'Redirecting to Google login...');
  };

  // Function to simulate GitHub login
  const handleGitHubLogin = () => {
    Alert.alert('GitHub Sign-In', 'Redirecting to GitHub login...');
  };

  // Get screen width and height to apply conditional styles
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      {/* Background image for the login screen */}
      <Image
        source={require('../assets/background.png')}
        style={{
          width: screenWidth * 0.8, // Adjust background image width based on screen width
          height: screenHeight * 0.25, // Adjust height based on screen height
          alignSelf: 'center',
          marginBottom: 10,
          resizeMode: 'contain',
        }}
      />

      {/* Title of the screen */}
      <Text style={styles.title}>Sign In</Text>

      {/* Email input field */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address" // Show email-specific keyboard
        autoCapitalize="none" // Prevent auto-capitalizing email input
        value={email} // Bind email state to input value
        onChangeText={setEmail} // Update email state on input change
      />

      {/* Password input field */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry // Hide password characters
        value={password} // Bind password state to input value
        onChangeText={setPassword} // Update password state on input change
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Divider line and "Or Sign in with" text */}
      <View style={styles.orSignInContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orSignInText}>Or Sign in with</Text>
        <View style={styles.line}></View>
      </View>

      {/* Google login button */}
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
        <Image source={googleLogo} style={styles.icon} />
        <Text style={styles.google}>Continue with Google</Text>
      </TouchableOpacity>

      {/* GitHub login button */}
      <TouchableOpacity style={[styles.button, styles.githubButton]} onPress={handleGitHubLogin}>
        <Image source={githubLogo} style={styles.icon} />
        <Text style={styles.github}>Continue with GitHub</Text>
      </TouchableOpacity>

      {/* Link to navigate to the Signup screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
}

// Stylesheet to define all the styles for the LoginForm component
const styles = StyleSheet.create({
  // Default container style for responsiveness
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  // Title text style
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  // Label text style for input fields
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  // Input field style
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    color: '#333',
  },
  // Default button style
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  // Google button specific style
  googleButton: {
    backgroundColor: '#F2F2F2',
  },
  google: {
    color: '#535353',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // GitHub button specific style
  githubButton: {
    backgroundColor: '#211F1F',
  },
  github: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // Text style for button text
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Icon style within buttons
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    borderRadius: 40,
  },
  // Text style for signup link
  signupText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  // Container for "Or Sign in with" section
  orSignInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  // Line style within "Or Sign in with" section
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e1e1e1',
  },
  // Text style for "Or Sign in with" text
  orSignInText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10,
  },
});
