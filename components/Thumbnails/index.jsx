import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import style from './style';
import Thumbnail from './Thumbnail';

export default () => {
  const { images, loading } = useSelector((state) => state);
  return loading || (
    <FlatList
      style={style.thumbnailList}
      data={images}
      renderItem={({ item, index: i }) => <Thumbnail item={item} i={i} />}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={style.thumbnailContainer}
    />
  );
};
