import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import style from './style';
import { updateQuery, fetchImage } from '../../redux/actionCreator';

export default () => {
  const { query } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <TextInput
      style={style.searchableHeader}
      onChangeText={(t) => dispatch(updateQuery(t))}
      value={query}
      selectTextOnFocus
      returnKeyLabel="Search"
      returnKeyType="search"
      blurOnSubmit
      onSubmitEditing={() => dispatch(fetchImage(query))}
    />
  );
};
