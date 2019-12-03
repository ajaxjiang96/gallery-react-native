import React, { useState } from 'react';
import { TextInput, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import style from './style';
import { updateQuery, fetchImage } from '../../redux/actionCreator';

export default () => {
  const { images, index } = useSelector((state) => state);
  return (
    <Image style={style.imageViewer} source={{ url: images[index].urls.regular }} />
  );
};
