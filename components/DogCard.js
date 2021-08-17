import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { deleteCard } from '../utils/storage-utils';

const DogCard = ({ dogObject, setCurrentDog, navigation }) => {
  const deleteAlert = () => {
    Alert.alert('Warning!', 'Are you sure you want to delete this card?', [
      {
        text: 'Confirm delete',
        onPress: () => {
          deleteCard(dogObject).then(() => {
            setCurrentDog(null);
            navigation.navigate('History', { navFrom: 'notsnap' });
          });
        },
        style: 'tick',
      },
      { text: 'Cancel' },
    ]);
  };

  console.log(dogObject);

  return (
    <View style={styles.container}>
      <Image style={styles.userPhoto} source={{ uri: dogObject.photoUri }} />
      <View style={styles.titleView}>
        <Image style={styles.stockPhoto} source={{ uri: dogObject.dog_url }} />
        <Text style={styles.heading}>{dogObject.breed}</Text>
      </View>

      <Text style={styles.text}>
        {Math.floor(dogObject.confidences * 100)}% Match!
      </Text>
      <Text style={styles.text}>Temperament: {dogObject.temperament}</Text>
      <Text style={styles.text}>
        Characteristics: {dogObject.characteristics}
      </Text>
      <Text style={styles.text}>Exercise: {dogObject.exercise}</Text>
      <Text style={styles.text}>Size: {dogObject.size}</Text>
      <FontAwesomeIcon
        size={30}
        style={styles.binIcon}
        icon={faTrash}
        onPress={deleteAlert}
      ></FontAwesomeIcon>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
  },
  userPhoto: {
    height: '50%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
  },
  titleView: {
    flexDirection: 'row',
    marginVertical: '5%',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    color: 'white',
    alignSelf: 'center',
  },
  stockPhoto: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    marginRight: '5%',
  },

  text: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: '10%',
  },
  binIcon: {
    color: 'white',
    alignSelf: 'flex-end',
    marginBottom: '5%',
    marginRight: '5%',
  },
});
DogCard.propTypes = {
  dogUri: PropTypes.string,
  route: PropTypes.object,
  dogObject: PropTypes.object,
  setCurrentDog: PropTypes.func,
  navigation: PropTypes.object,
};

export default DogCard;
