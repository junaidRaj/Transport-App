import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Style from '../Screens/Style';
import SMinput from '../Componets/SMinput';
import Styles from '../Screens/Style';

export default function Login({navigation}) {
  const [model, setModel] = useState({});
  const [loader, setLoader] = useState(false);
  const [OpenModal, setOpenModal] = useState(true);
  let LoginUser = () => {
    setLoader(true);
    auth()
      .signInWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log(res.user.uid);
        navigation.navigate('Home');
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal
        visible={OpenModal}
        onRequestClose={() => setOpenModal(false)}
        transparent={true}>
        <View style={[Styles.h100, Styles.flexCenter, Styles.bgTransparent]}>
          <View
            style={[
              Styles.w75,
              Styles.rounded,
              Styles.bgWhite,
              Styles.p3,
              Styles.shadow1,
            ]}>
            <Text
              style={[
                Styles.textCenter,
                Styles.textBold,
                Styles.fs2,
                Styles.textBlack,
              ]}>
              Agree Terms
            </Text>
            <View
              style={[
                Styles.flexRow,
                Styles.my1,
                Styles.justifyContentBetween,
                Styles.borderTop2,
              ]}>
              <Text style={[Styles.textBold, Styles.fs4, Styles.textBlack]}>
                Cancel
              </Text>
              <Text style={[Styles.textBold, Styles.fs4, Styles.textBlack]}>
                Ok
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={[Style.h100, Style.flexCenter, Style.bgThemeLight, Style.p1]}>
        <Text style={[Style.fs1, Style.textBlack, Style.mb1, Style.textBold]}>
          Login
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
            maxLength={8}
            onChangeText={e => setModel({...model, password: e})}
            lable="Password"
          />
        </View>
        <View style={[Style.w100, Style.mb5, Style.p1]}>
          <TouchableOpacity style={[Style.btn, Style.mt1]} onPress={LoginUser}>
            {loader ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={[Style.textWhite, Style.textCenter, Style.textBold]}>
                Login
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
