import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Footer = () => {
  const [bgColor, setBgColor] = useState('lightgray');

  return (
    <View style={[styles.footer, { backgroundColor: bgColor }]}>
      <Text>Thank you for viewing my resume!</Text>
      <Button
        title="Toggle Color"
        onPress={() => setBgColor(bgColor === 'lightgray' ? '#4CAF50' : 'lightgray')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: { padding: 20, alignItems: 'center' },
});

export default Footer;
