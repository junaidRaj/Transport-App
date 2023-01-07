import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Styles from './Style';
import SMinput from '../Componets/SMinput';
import SMbutton from '../Componets/SMbutton';
import database from '@react-native-firebase/database';

const Register = ({navigation}) => {
  const [model, setModel] = useState({});
  const [loader, setLoader] = useState(false);
  let sendData = () => {
    setLoader(true);
    console.log(model);
    model.id = database().ref('RegisterVehcicle/').push().key;
    database()
      .ref(`RegisterVehcicle/${model.id}`)
      .set(model)
      .then(() => {
        console.log('data Succesfully send');
        setLoader(false);
        setModel('');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={[Styles.h100, Styles.bgThemeLight]}>
      <ScrollView>
        <View style={Styles.p1}>
          <SMinput
            lable="Vehicle Name"
            onChangeText={e => setModel({...model, VehicleName: e})}
          />
        </View>
        <View style={Styles.p1}>
          <SMinput
            lable="Vehicle Type"
            onChangeText={e => setModel({...model, VehicleType: e})}
          />
        </View>
        <View style={Styles.p1}>
          <SMinput
            lable="No of Seats"
            onChangeText={e => setModel({...model, Seats: e})}
          />
        </View>
        <View style={Styles.p1}>
          <SMinput
            lable="Price"
            onChangeText={e => setModel({...model, Price: e})}
          />
        </View>
        <View style={Styles.p1}>
          <SMinput
            lable="Start Point"
            onChangeText={e => setModel({...model, Startime: e})}
          />
        </View>
        <View style={Styles.p1}>
          <SMinput
            lable="End Point"
            onChangeText={e => setModel({...model, Endtime: e})}
          />
        </View>
        <View style={Styles.p1}>
          {loader ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <SMbutton lable="Registered" onPress={sendData} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
