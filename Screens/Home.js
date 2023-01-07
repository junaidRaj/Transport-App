import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Styles from './Style';
import SMbutton from '../Componets/SMbutton';
import database from '@react-native-firebase/database';

const Home = ({navigation}) => {
  const [refreshing, setrefreshing] = useState(true);
  const [list, setList] = useState([]);
  console.log(list);
  let getData = () => {
    database()
      .ref('RegisterVehcicle')
      .once('value', dt => {
        let li = Object.values(dt.val());
        setList([...li]);
        setrefreshing(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  let xyz = () => {
    setrefreshing(true);
    setTimeout(() => {
      setrefreshing(false);
    }, 6000);
  };
  return (
    <View style={[Styles.h100, Styles.bgThemeLight]}>
      <View style={Styles.p2}>
        <Text
          style={[
            Styles.textBold,
            Styles.textCenter,
            Styles.textCenter,
            Styles.fs1,
            Styles.borderBottom3,
            Styles.textBlack,
          ]}>
          Home
        </Text>
      </View>
      <ScrollView>
        <View style={Styles.p2}>
          <View>
            <SMbutton
              lable="Register Vehicle"
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
          </View>
          <View style={Styles.mt1}>
            <SMbutton
              lable="Available Vehicle"
              onPress={() => {
                navigation.navigate('Available');
              }}
            />
          </View>
          <View style={Styles.mt1}>
            <SMbutton
              lable="Book Vhicle"
              onPress={() => {
                navigation.navigate('BookVehicle');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
