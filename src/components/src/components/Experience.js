import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Experience = ({ jobs }) => (
  <View style={styles.experience}>
    {jobs.map((job, index) => (
      <View key={index} style={styles.job}>
        <Text style={styles.position}>{job.position} at {job.company}</Text>
        <Text>{job.years}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  experience: { padding: 10 },
  job: { marginBottom: 5 },
  position: { fontWeight: 'bold' },
});

export default Experience;
