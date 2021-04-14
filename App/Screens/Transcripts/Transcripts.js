import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from './../../components/header';

const Transcripts = (props) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: props.color.background_init}}>
      <Header title="Dashboard" />
      <View
        style={{
          marginLeft: 20,
          marginTop: hp('2%'),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: wp('8%'), color: props.color.text}}>
          Transcripts
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Upload Marksheet');
          }}
          style={{
            backgroundColor: props.color.button,
            borderRadius: 5,
            marginRight: wp('12%'),
            padding: 3,
          }}>
          <Text style={{color: props.color.text, fontSize: wp('4%')}}>
            Upload Marksheets
          </Text>
        </TouchableOpacity>
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
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: wp('8%'),
          color: props.color.text,
        }}>
        Add New Transcript
      </Text>
    </ScrollView>
  );
};

const msp = (state) => ({
  color: state.color,
});

export default connect(msp, {})(Transcripts);

const styles = StyleSheet.create({});
