import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Title} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {data} from '../../Utils/temp';

import { BackHandler } from 'react-native';

const Subjects = (props) => {
  const navigation = useNavigation();
  // if(this.props.transcript.edit_marks == {}){
  //   return (
  //     <View
  //     style={{
  //       flex: 1,
  //       backgroundColor: props.color.background_init,
  //     }}>Loading...</View>
  //   )
  // }else{
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.color.background_init,
      }}>
      <Card
        style={{
          margin: 10,
          borderRadius: 25,
          backgroundColor: props.color.button,
          marginTop: 25,
        }}>
        <Card.Content>
          <Title
            style={{
              color: props.color.text,
              fontSize: 24,
              fontWeight: '700',
              fontFamily: 'dosis',
              marginVertical: heightPercentageToDP('4%'),
              marginHorizontal: widthPercentageToDP('4%'),
            }}>
            Check your Subjects
          </Title>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: widthPercentageToDP('4%'),
            }}>
            <Text
              style={{
                color: props.color.text,
                fontSize: 20,
                fontFamily: 'Dosis-Regular',
              }}>
              Semester: 3
            </Text>
            <Text
              style={{
                color: props.color.text,
                fontSize: 20,
                fontFamily: 'Dosis-Regular',
              }}>
              CGPA: 9.5
            </Text>
          </View>
          <FlatList
            data={data}
            renderItem={(itemData) => {
              return (
                <View style={{marginTop: heightPercentageToDP('5%')}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SubjectDetails', {
                        subjectName: itemData.item.name,
                      });
                    }}>
                    <View
                      style={{
                        marginHorizontal: widthPercentageToDP('4%'),
                        borderBottomWidth: 1,
                        paddingVertical: 10,
                        borderBottomColor: props.color.text,
                      }}>
                      <Text
                        style={{
                          color: props.color.text,
                          fontSize: 20,
                          fontFamily: 'Dosis-Bold',
                        }}>
                        {itemData.item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

const msp = (state) => ({
  color: state.color,
  transcript : state.transcript
});

export default connect(msp, {})(Subjects);

const styles = StyleSheet.create({});
