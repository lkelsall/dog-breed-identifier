import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { deleteCard } from '../utils/storage-utils';

const CardDisplay = ({ dogObject, setCurrentDog, navigation }) => {
  console.log(dogObject);
  const deleteAlert = () => {
    Alert.alert(
      'Warning!',
      'Are you sure you do not want to add this card to the gallery?',
      [
        {
          text: 'yes',
          onPress: () => {
            deleteCard(dogObject).then(() => {
              setCurrentDog(null);
              navigation.navigate('History', { navFrom: 'notsnap' });
            });
          },
          style: 'tick',
        },
        { text: 'No', onPress: () => console.log('okay') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Image
          source={{ uri: `${dogObject.photoUri}` }}
          style={{ width: 400, height: 300 }}
        />
        <Card.Divider />
        <Card.Title style={styles.title}>{dogObject.breed}</Card.Title>
        <Image
          style={styles.stockImage}
          source={{ uri: `${dogObject.dog_url}` }}
        />
        <View style={styles.text}>
          <Text>
            Percentage match: {Math.floor(dogObject.confidences * 100)}%
          </Text>
          <Text>Temperament: {dogObject.temperament}</Text>
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
CardDisplay.propTypes = {
  dogUri: PropTypes.string,
  route: PropTypes.object,
  dogObject: PropTypes.object,
  setCurrentDog: PropTypes.func,
  navigation: PropTypes.object,
};

export default CardDisplay;
