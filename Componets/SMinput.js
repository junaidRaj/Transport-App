import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Styles from '../Screens/Style';

const SMinput = props => {
  const {lable, onChangeText, disabled, value} = props;
  return (
    <>
      <TextInput
        style={[Styles.input]}
        placeholder={lable}
        value={value}
        editable={!disabled}
        placeholderTextColor="black"
        onChangeText={onChangeText}
      />
    </>
  );
};

export default SMinput;
