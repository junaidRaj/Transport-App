import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Style from '../Screens/Style';
import SMinput from '../Componets/SMinput';
import database from '@react-native-firebase/database';

export default function SignUp({navigation}) {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState({});
  let signUpUser = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log(res);
        console.log(res.user.uid);
        database()
          .ref(`User/${res.user.uid}`)
          .set(model)
          .then(() => {
            navigation.navigate('Login', res.user.uid);
            setLoading = false;
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={[Style.h100, Style.flexCenter, Style.bgThemeLight, Style.p1]}>
      <Text style={[Style.fs1, Style.textBlack, Style.mb1, Style.textBold]}>
        SignUp
      </Text>
      <View style={[Style.w100, Style.p1]}>
        <SMinput
          onChangeText={e => setModel({...model, email: e})}
          lable="email"
        />
      </View>
      <View style={[Style.w100, Style.p1]}>
        <SMinput
          secureTextEntry={true}
          onChangeText={e => setModel({...model, password: e})}
          maxLength={8}
          lable="Password"
        />
      </View>
      <View style={[Style.w100, Style.mb5, Style.p1]}>
        <TouchableOpacity style={[Style.btn, Style.mt1]} onPress={signUpUser}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text
              size="large"
              style={[Style.textWhite, Style.textCenter, Style.textBold]}>
              Create User
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
