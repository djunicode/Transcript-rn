import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Transcripts = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: props.color.background_inner,
          height: hp('13%'),
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: hp('6%'),
            fontSize: 32,
            fontFamily: 'dosis-regular',
            color: props.color.text,
          }}>
          My Dashboard
        </Text>
      </View>
      <View style={{marginLeft: 20, marginTop: hp('2%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 30}}>Transcripts</Text>
        <TouchableOpacity onPress={() => {props.navigation.navigate("Upload Marksheet")}} style={{backgroundColor: props.color.background_inner, borderRadius: 5, marginRight: wp("10%"), padding: 3}}>
            <Text>Upload Marksheets</Text>
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
        size={44}
        color={props.color.background_inner}
        style={{marginHorizontal: wp('44%')}}
      />
      <Text
        style={{textAlign: 'center', fontSize: 20, color: props.color.text}}>
        Add New Transcript
      </Text>
    </View>
  );
};

const msp = (state) => ({
  color: state.color,
});

export default connect(msp, {})(Transcripts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
