import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import style from './style';
import { selectImage } from '../../redux/actionCreator';

export default ({ item, i }) => {
  const { index } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <TouchableHighlight
      style={[style.thumbnailWrapper, i === index && style.selected]}
      onPress={() => dispatch(selectImage(i))}
    >
      <Image style={style.thumbnail} source={{ url: item.urls.thumb }} />
    </TouchableHighlight>
  );
};
