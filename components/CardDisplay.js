import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';

const CardDisplay = () => {
  const dogObject = {
    photo: 'URI',
    breed: 'Cocker spaniel',
    percentageMatch: '76%',
    temperemant: 'Gentle and affectionate',
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
          styles={{ width: 10, height: 10 }}
        />
        <Card.Title>{dogObject.breed}</Card.Title>
      </Card>
    </View>
  );
};

export default CardDisplay;
