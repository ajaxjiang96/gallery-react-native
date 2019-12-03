import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  thumbnailContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingRight: 20,
  },
  thumbnail: {
    width: 80,
    height: 45,
    backgroundColor: 'grey',
  },
  thumbnailWrapper: {
    width: 80,
    height: 45,
    marginLeft: 20,
  },
  selected: {
    shadowOffset: {
      x: 0,
      y: 3,
    },
    shadowRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.16,
  }
})