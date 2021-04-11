import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Header from '../../components/header';
import {connect} from 'react-redux';

const NewLor = (props) => {
  const navigation = useNavigation();
  const width = Dimensions.get('screen').width;
  return (
    <ScrollView style={{flex: 1, backgroundColor: props.color.background_init}}>
      <Header title="LOR Template" />
      <View>
        <Text
          style={{
            textAlign: 'left',
            fontSize: widthPercentageToDP('5%'),
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
                fontSize: widthPercentageToDP('4.5%'),
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Enter Candidate
            </Text>
            <Text
              style={{
                fontSize: widthPercentageToDP('4.5%'),
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Name
            </Text>
          </View>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={props.color.text}
            style={{
              fontSize: widthPercentageToDP('4.5%'),
              borderBottomWidth: 1,
              width: 200,
              borderBottomColor: props.color.text,
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
              fontSize: widthPercentageToDP('4.5%'),
              fontFamily: 'Dosis-Bold',
              color: props.color.text,
            }}>
            Enter Subjects
          </Text>
          <TextInput
            placeholder="Seperate each subject with a comma"
            placeholderTextColor={props.color.text}
            style={{
              fontSize: widthPercentageToDP('4.5%'),
              borderBottomWidth: 1,
              width: 200,
              borderBottomColor: props.color.text,
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
              fontSize: widthPercentageToDP('4.5%'),
              fontFamily: 'Dosis-Bold',
              color: props.color.text,
            }}>
            Enter Mean SGPA
          </Text>
          <TextInput
            placeholder="CGPA"
            placeholderTextColor={props.color.text}
            style={{
              fontSize: widthPercentageToDP('4.5%'),
              borderBottomWidth: 1,
              width: 200,
              borderBottomColor: props.color.text,
              color: props.color.text,
            }}
          />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: width < 400 ? 'column' : 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: heightPercentageToDP('3%'),
          }}>
          <View
            style={{
              borderWidth: 0.7,
              borderRadius: 6,
              borderColor: props.color.button,
              backgroundColor: props.color.button,
            }}>
            <Button
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
              borderColor: props.color.button,
              backgroundColor: props.color.button,
              marginTop: width < 400 ? heightPercentageToDP('2%') : 0,
            }}>
            <Button
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
              borderColor: props.color.button,
              backgroundColor: props.color.button,
              marginTop: width < 400 ? heightPercentageToDP('2%') : 0,
            }}>
            <Button
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
            borderColor: props.color.button,
            backgroundColor: props.color.button,
            marginHorizontal: widthPercentageToDP('24%'),
            marginVertical: heightPercentageToDP('4%'),
          }}>
          <Button color={props.color.text}>Write your own LOR</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const msp = (state) => ({
  color: state.color,
});
export default connect(msp, {})(NewLor);
const styles = StyleSheet.create({});
