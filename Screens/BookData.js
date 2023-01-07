import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Styles from './Style';
import SMbutton from '../Componets/SMbutton';

const BookData = ({navigation, route}) => {
  const [list, setList] = useState([
    {
      name: 'Muhammad junaid',
      feedback: 'Very nice and safeley drive.....',
    },
    {
      name: 'Muhammad junaid',
      feedback: 'Very nice and safeley drive.....',
    },
    {
      name: 'Muhammad junaid',
      feedback: 'Very nice and safeley drive.....',
    },
    {
      name: 'Muhammad junaid',
      feedback: 'Very nice and safeley drive.....',
    },
    {
      name: 'Muhammad junaid',
      feedback: 'Very nice and safeley drive.....',
    },
    {
      name: 'Muhammad junaid',
      feedback: 'Very nice and safeley drive.....',
    },
    {
      name: 'Muhammad junaid',
      feedback: 'Very nice and safeley drive.....',
    },
  ]);
  let obj = route.params;
  return (
    <View style={[Styles.h100, Styles.bgThemeLight, Styles.p2]}>
      <View style={[Styles.w100, Styles.p1, Styles.rounded, Styles.bgPrimary]}>
        <Text style={[Styles.textWhite, Styles.fs5]}>
          Car : {obj.VehicleName}
        </Text>
        <Text style={[Styles.textWhite, Styles.fs5]}>
          Vehicle Type : {obj.VehicleType}
        </Text>
        <Text style={[Styles.textWhite, Styles.fs5]}>Seats : {obj.Seats}</Text>
        <Text style={[Styles.textWhite, Styles.fs5]}>Price : {obj.Price}</Text>
        <Text style={[Styles.textWhite, Styles.fs5]}>
          Start Time : {obj.Startime}
        </Text>
        <Text style={[Styles.textWhite, Styles.fs5]}>
          End Time : {obj.Endtime}
        </Text>
      </View>
      <View style={[Styles.p2, Styles.bgLight, Styles.rounded, Styles.mt1]}>
        <Text style={[Styles.fs3, Styles.textBlack]}>Reviews</Text>
        <ScrollView style={{height: 320}}>
          {list.map((x, i) => (
            <View
              key={i}
              style={[Styles.bgPrimary, Styles.my1, Styles.p1, Styles.rounded]}>
              <Text style={[Styles.fs5, Styles.textWhite]}>{x.name}</Text>
              <Text style={[Styles.fs5, Styles.textWhite]}>{x.feedback}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={[Styles.pt1]}>
        <SMbutton
          onPress={() => {
            navigation.navigate('BookVehicle', obj);
          }}
          lable="Book Now"
        />
      </View>
    </View>
  );
};

export default BookData;
