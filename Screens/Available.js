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
  const [refreshing, setrefreshing] = useState(false);
  const [list, setList] = useState([]);
  console.log(list);
  let getData = () => {
    setrefreshing(true);
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
      <ScrollView>
        <View style={Styles.mt2}>
          <Text
            style={[
              Styles.textCenter,
              Styles.textBold,
              Styles.fs2,
              Styles.textBlack,
            ]}>
            Services Available
          </Text>
        </View>
        <View style={Styles.p1}>
          <ScrollView
            refreshControl={
              <RefreshControl onRefresh={xyz} refreshing={refreshing} />
            }>
            {list.map((e, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  navigation.navigate('BookData', e);
                }}
                style={[
                  Styles.bgPrimary,
                  Styles.rounded,
                  Styles.p1,
                  Styles.m1,
                ]}>
                <View style={[Styles.flexRow]}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWI1tWNj25P9sCkHRSmtzDIha05RySEkzkw&usqp=CAU',
                    }}
                  />
                  <View style={Styles.ms1}>
                    <Text style={[Styles.textWhite]}>
                      Vehicle Name : {e.VehicleName}
                    </Text>
                    <Text style={[Styles.textWhite]}>
                      Vehicle Type : {e.VehicleType}
                    </Text>
                    <Text style={[Styles.textWhite]}>Price : {e.Price}</Text>
                    <Text style={[Styles.textWhite]}>Seats : {e.Seats}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
