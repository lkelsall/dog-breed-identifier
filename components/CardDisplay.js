import React from 'react';
import { View, Text } from 'react-native';
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
    <View>
      <Card>
        <Card.Divider />
        <Card.Image
          source={require('../dog-images/pug.jpg')}
          style={{ width: 100, height: 100 }}
        />
        <Card.Title>{dogObject.breed}</Card.Title>
        <Text>Percentage match: {dogObject.percentageMatch}</Text>
        <Text>Temperament: {dogObject.temperamant}</Text>
        <Text>Characteristics: {dogObject.characteristics}</Text>
        <Text>Exercise requirements: {dogObject.exercise}</Text>
        <Text>Size: {dogObject.size}</Text>
      </Card>
    </View>
  );
};

export default CardDisplay;
