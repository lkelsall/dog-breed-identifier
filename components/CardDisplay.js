import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const CardDisplay = () => {
  const dogObject = {
    photo: 'URI',
    breed: 'Pug',
    percentageMatch: '76%',
    temperamant: 'Gentle and affectionate',
    characteristics: 'Merry nature',
    exercise: '1hr +',
    size: 'Medium',
  };
  return (
    <View style={styles.container}>
      <Card>
        <Card.Image
          source={require('../dog-images/pug.jpg')}
          style={{ width: 400, height: 400 }}
        />
        <Card.Title style={styles.title}>{dogObject.breed}</Card.Title>
        <Card.Divider />
        <Image
          style={styles.stockImage}
          source={require('../dog-images/little-pug.jpg')}
        />
        <Text>Percentage match: {dogObject.percentageMatch}</Text>
        <Text>Temperament: {dogObject.temperamant}</Text>
        <Text>Characteristics: {dogObject.characteristics}</Text>
        <Text>Exercise requirements: {dogObject.exercise}</Text>
        <Text>Size: {dogObject.size}</Text>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5f9ea0',
  },
  stockImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 30,
  },
});

export default CardDisplay;
