import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = ({ email, phone }) => (
  <View style={styles.contact}>
    <Text>Email: {email}</Text>
    <Text>Phone: {phone}</Text>
  </View>
);

const styles = StyleSheet.create({
  contact: { padding: 10 },
});

export default Contact;
