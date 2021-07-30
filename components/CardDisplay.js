import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
  const deleteAlert = () => {
    Alert.alert('Warning!', 'Are you sure you want to delete your card?', [
      {
        text: 'yes',
        onPress: () => console.log('card deleted'),
        style: 'tick',
      },
      { text: 'No', onPress: () => console.log('okay') },
    ]);
  };
  return (
    <View style={styles.container}>
      <Card>
        <Card.Image
          source={require('../dog-images/pug.jpg')}
          style={{ width: 400, height: 300 }}
        />
        <Card.Divider />
        <Card.Title style={styles.title}>{dogObject.breed}</Card.Title>
        <Image
          style={styles.stockImage}
          source={require('../dog-images/little-pug.jpg')}
        />
        <View style={styles.text}>
          <Text>Percentage match: {dogObject.percentageMatch}</Text>
          <Text>Temperament: {dogObject.temperamant}</Text>
          <Text>Characteristics: {dogObject.characteristics}</Text>
          <Text>Exercise requirements: {dogObject.exercise}</Text>
          <Text>Size: {dogObject.size}</Text>
        </View>
        <FontAwesomeIcon
          size={30}
          style={styles.icon}
          icon={faTrash}
          onPress={deleteAlert}
        ></FontAwesomeIcon>
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
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    color: '#5f9ea0',
    width: 70,
    height: 90,
    alignSelf: 'flex-end',
  },
});

export default CardDisplay;
