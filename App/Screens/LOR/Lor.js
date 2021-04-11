import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Header from './../../components/header';

const Lor = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: props.color.background_init}}>
      <Header title="My Dashboard" />
      <View style={{marginLeft: 20, marginTop: hp('2%')}}>
        <Text style={{fontSize: wp('10%'), color: props.color.text}}>LORs</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: hp('3%'),
        }}>
        <Card
          style={{
            height: hp('20%'),
            width: wp('40%'),
            elevation: 8,
            borderRadius: 10,
          }}>
          {/* <Text>Hello</Text> */}
        </Card>
        <Card
          style={{
            height: hp('20%'),
            width: wp('40%'),
            elevation: 5,
            borderRadius: 10,
          }}>
          {/* <Text>Hello</Text> */}
        </Card>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginVertical: hp('5%'),
        }}>
        <Card
          style={{
            height: hp('20%'),
            width: wp('40%'),
            elevation: 8,
            borderRadius: 10,
          }}>
          {/* <Text>Hello</Text> */}
        </Card>
        <Card
          style={{
            height: hp('20%'),
            width: wp('40%'),
            elevation: 5,
            borderRadius: 10,
          }}>
          {/* <Text>Hello</Text> */}
        </Card>
      </View>
      <AntDesign
        name="pluscircle"
        size={wp('12%')}
        color={props.color.button}
        style={{marginHorizontal: wp('44%')}}
        onPress={() => navigation.navigate('NewLor')}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: wp('8%'),
          color: props.color.text,
        }}>
        Add New LOR
      </Text>
    </ScrollView>
  );
};

const msp = (state) => ({
  color: state.color,
});

export default connect(msp, {})(Lor);

const styles = StyleSheet.create({});
