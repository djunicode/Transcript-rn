import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import Header from './../../components/header'

const NewLor = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1 , backgroundColor:props.color.background_init}}>
      <Header title="LOR Template"/>
      <View>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 17,
            marginHorizontal: widthPercentageToDP('10%'),
            marginVertical: heightPercentageToDP('5%'),
            fontFamily: 'Dosis-Regular',
            color: props.color.text,
          }}>
          LOR - Letter of Recommendation, helps tremendously in generating
          personal impact.
        </Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: heightPercentageToDP('5%'),
            marginHorizontal: widthPercentageToDP('3%'),
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Enter Candidate
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Name
            </Text>
          </View>
          <TextInput
            placeholder="Full Name"
            style={{
              fontSize: 15,
              borderBottomWidth: 1,
              width: 200,
              borderBottomColor: props.color.background_inner,
              color: props.color.text,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginHorizontal: widthPercentageToDP('3%'),
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Dosis-Bold',
              color: props.color.text,
            }}>
            Enter Subjects
          </Text>
          <TextInput
            placeholder="Seperate each subject with a comma"
            style={{
              fontSize: 13,
              borderBottomWidth: 1,
              width: 200,
              borderBottomColor: props.color.background_inner,
              color: props.color.text,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: heightPercentageToDP('5%'),
            marginHorizontal: widthPercentageToDP('3%'),
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Dosis-Bold',
              color: props.color.text,
            }}>
            Enter Mean SGPA
          </Text>
          <TextInput
            placeholder="CGPA"
            style={{
              fontSize: 13,
              borderBottomWidth: 1,
              width: 200,
              borderBottomColor: props.color.background_inner,
              color: props.color.text,
            }}
          />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: heightPercentageToDP('3%'),
          }}>
          <View
            style={{
              borderWidth: 0.7,
              borderRadius: 6,
              borderColor: props.color.background_inner,
              backgroundColor: props.color.background_inner,
            }}>
            <Button
              style={{backgroundColor : props.color.button}}
              color={props.color.text}
              onPress={() => {
                navigation.navigate('Template1');
              }}>
              Template 1
            </Button>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderRadius: 6,
              borderColor: props.color.background_inner,
              backgroundColor: props.color.background_inner,
            }}>
            <Button
            style={{backgroundColor : props.color.button}}
              color={props.color.text}
              onPress={() => {
                navigation.navigate('Template2');
              }}>
              Template 2
            </Button>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderRadius: 6,
              borderColor: props.color.background_inner,
              backgroundColor: props.color.background_inner,
            }}>
            <Button
              style={{backgroundColor : props.color.button}}
              color={props.color.text}
              onPress={() => {
                navigation.navigate('Template3');
              }}>
              Template 3
            </Button>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'Dosis-Bold',
            color: props.color.text,
          }}>
          OR
        </Text>
        <View
          style={{
            borderWidth: 0.7,
            borderRadius: 6,
            borderColor: props.color.background_inner,
            backgroundColor: props.color.background_inner,
            marginHorizontal: widthPercentageToDP('24%'),
            marginVertical: heightPercentageToDP('4%'),
          }}>
          <Button style={{backgroundColor : props.color.button}} color={props.color.text}>Write your own LOR</Button>
        </View>
      </View>
    </View>
  );
};

const msp = (state) => ({
  color: state.color,
});
export default connect(msp, {})(NewLor);
const styles = StyleSheet.create({});
