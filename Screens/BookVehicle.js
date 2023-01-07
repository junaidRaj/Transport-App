import {
  View,
  Text,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Styles from './Style';
import SMinput from '../Componets/SMinput';
import SMbutton from '../Componets/SMbutton';
import database from '@react-native-firebase/database';

const BookVehicle = ({navigation, route}) => {
  let Obj = route.params;
  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState({});
  let bookNow = () => {
    model.id = database().ref('Bookings/').push().key;
    setLoader(true);
    database()
      .ref('Bookings/')
      .set(model)
      .then(() => {
        // ToastAndroid.show('Booking Created'), ToastAndroid.SHORT;
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={[Styles.h100, Styles.bgThemeLight]}>
      <View style={Styles.p2}>
        <Text style={[Styles.textBlack, Styles.textBold, Styles.fs2]}>
          Create Vhicle Booking
        </Text>
        <ScrollView style={Styles.h75}>
          <View
            style={[
              Styles.bgLight,
              Styles.rounded,
              Styles.p1,
              Styles.shadow1,
              Styles.my1,
            ]}>
            <Text style={[Styles.textBlack, Styles.fs3]}>Personal Details</Text>
            <View style={Styles.py1}>
              <SMinput
                onChangeText={e => setModel({...model, UserName: e})}
                lable="User Name"
              />
            </View>
            <View style={Styles.py1}>
              <SMinput
                onChangeText={e => setModel({...model, Conatct: e})}
                lable="Contact"
              />
            </View>
            <View style={Styles.py1}>
              <SMinput
                onChangeText={e => setModel({...model, Adress: e})}
                lable="Address"
              />
            </View>
            <View style={Styles.py1}>
              <SMinput
                onChangeText={e => setModel({...model, CNIC: e})}
                lable="CNIC"
              />
            </View>
            <View style={Styles.py1}>
              <SMinput
                onChangeText={e => setModel({...model, PickUpPoint: e})}
                lable="Pick Up Point"
              />
            </View>
            <View style={Styles.py1}>
              <SMinput
                onChangeText={e => setModel({...model, EndPoint: e})}
                lable="End Point"
              />
            </View>
          </View>
          <View
            style={[
              Styles.bgLight,
              Styles.rounded,
              Styles.p1,
              Styles.shadow1,
              Styles.my1,
            ]}>
            <Text style={[Styles.textBlack, Styles.fs]}>Vehicle Details</Text>
            <View style={Styles.py1}>
              <SMinput disabled={true} lable="Vehicle Name" />
            </View>
            <View style={Styles.py1}>
              <SMinput disabled={true} lable="Vehicle Type" />
            </View>
            <View style={Styles.py1}>
              <SMinput disabled={true} lable="No Of Seats" />
            </View>
          </View>
        </ScrollView>
        <View style={Styles.pt1}>
          {loader ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <SMbutton onPress={bookNow} lable="Book Now" />
          )}
        </View>
      </View>
    </View>
  );
};

export default BookVehicle;
