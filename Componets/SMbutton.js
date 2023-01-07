import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Styles from '../Screens/Style';

const SMbutton = props => {
  const {lable, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[Styles.btn]}>
        <Text
          style={[
            Styles.textCenter,
            Styles.textWhite,
            Styles.textBold,
            Styles.fs5,
          ]}>
          {lable}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default SMbutton;
