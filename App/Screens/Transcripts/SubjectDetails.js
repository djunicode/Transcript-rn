import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  LogBox,
} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {connect} from 'react-redux';
import {data} from '../../Utils/detail';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
LogBox.ignoreLogs(['VirtualizedList']);
let tempData = [];
const SubjectDetails = (props) => {
  const navigation = useNavigation();
  const {
    subjectName,
    cg,
    course_code,
    credits_earned,
    grade,
    pointer,
    cgpa,
    sem,
    data,
  } = props.route.params;
  const [updatedSubjectName, setUpdatedSubjectName] = useState(subjectName);
  const [updatedCg, setUpdatedCg] = useState(cg);
  const [updatedCourseCode, setUpdatedCourseCode] = useState(course_code);
  const [updatedCredits, setUpdatedCredits] = useState(credits_earned);
  const [updatedGrade, setUpdatedGrade] = useState(grade);
  const [updatedPointer, setUpdatedPointer] = useState(pointer);
  const newData = {
    cg: updatedCg,
    course_code: updatedCourseCode,
    course_name: updatedSubjectName,
    credits_earned: updatedCredits,
    grade: updatedGrade,
    pointer: updatedPointer,
  };

  const updateData = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].course_name == subjectName) {
        data[i] = newData;
      }
    }
  };

  return (
    <ScrollView
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
            Preview your marks
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
              Semester: {sem}
            </Text>
            <Text
              style={{
                color: props.color.text,
                fontSize: 20,
                fontFamily: 'Dosis-Regular',
              }}>
              CGPA: {cgpa}
            </Text>
          </View>

          <View>
            <View
              style={{
                marginHorizontal: widthPercentageToDP('4%'),
                borderBottomWidth: 1,

                borderBottomColor: props.color.text,
                marginTop: heightPercentageToDP('5%'),
              }}>
              <Text
                style={{
                  marginHorizontal: widthPercentageToDP('1%'),
                  color: props.color.text,
                  fontSize: 18,
                  fontFamily: 'Dosis-Regular',
                }}>
                Course Code:
              </Text>
              <TextInput
                style={{
                  color: props.color.text,
                  fontSize: 20,
                  fontFamily: 'Dosis-Bold',
                }}
                value={updatedCourseCode}
                onChangeText={(data) => setUpdatedCourseCode(data)}
              />
            </View>
            <View
              style={{
                marginHorizontal: widthPercentageToDP('4%'),
                borderBottomWidth: 1,
                borderBottomColor: props.color.text,
                marginTop: heightPercentageToDP('5%'),
              }}>
              <Text
                style={{
                  marginHorizontal: widthPercentageToDP('1%'),
                  color: props.color.text,
                  fontSize: 18,
                  fontFamily: 'Dosis-Regular',
                }}>
                Course Name:
              </Text>
              <TextInput
                style={{
                  color: props.color.text,
                  fontSize: 20,
                  fontFamily: 'Dosis-Bold',
                }}
                value={updatedSubjectName}
                onChangeText={(data) => setUpdatedSubjectName(data)}
              />
            </View>
            <View
              style={{
                marginHorizontal: widthPercentageToDP('4%'),
                borderBottomWidth: 1,
                borderBottomColor: props.color.text,
                marginTop: heightPercentageToDP('5%'),
              }}>
              <Text
                style={{
                  marginHorizontal: widthPercentageToDP('1%'),
                  color: props.color.text,
                  fontSize: 18,
                  fontFamily: 'Dosis-Regular',
                }}>
                Credits Earned:
              </Text>
              <TextInput
                style={{
                  color: props.color.text,
                  fontSize: 20,
                  fontFamily: 'Dosis-Bold',
                }}
                value={updatedCredits}
                onChangeText={(data) => setUpdatedCredits(data)}
              />
            </View>
            <View
              style={{
                marginHorizontal: widthPercentageToDP('4%'),
                borderBottomWidth: 1,
                borderBottomColor: props.color.text,
                marginTop: heightPercentageToDP('5%'),
              }}>
              <Text
                style={{
                  marginHorizontal: widthPercentageToDP('1%'),
                  color: props.color.text,
                  fontSize: 18,
                  fontFamily: 'Dosis-Regular',
                }}>
                Grade:
              </Text>
              <TextInput
                style={{
                  color: props.color.text,
                  fontSize: 20,
                  fontFamily: 'Dosis-Bold',
                }}
                value={updatedGrade}
                onChangeText={(data) => setUpdatedGrade(data)}
              />
            </View>
            <View
              style={{
                marginHorizontal: widthPercentageToDP('4%'),
                borderBottomWidth: 1,
                borderBottomColor: props.color.text,
                marginTop: heightPercentageToDP('5%'),
              }}>
              <Text
                style={{
                  marginHorizontal: widthPercentageToDP('1%'),
                  color: props.color.text,
                  fontSize: 18,
                  fontFamily: 'Dosis-Regular',
                }}>
                Pointer:
              </Text>
              <TextInput
                style={{
                  color: props.color.text,
                  fontSize: 20,
                  fontFamily: 'Dosis-Bold',
                }}
                value={updatedPointer}
                onChangeText={(data) => setUpdatedPointer(data)}
              />
            </View>
            <View
              style={{
                marginHorizontal: widthPercentageToDP('4%'),
                borderBottomWidth: 1,
                borderBottomColor: props.color.text,
                marginTop: heightPercentageToDP('5%'),
              }}>
              <Text
                style={{
                  marginHorizontal: widthPercentageToDP('1%'),
                  color: props.color.text,
                  fontSize: 18,
                  fontFamily: 'Dosis-Regular',
                }}>
                C*G:
              </Text>
              <TextInput
                style={{
                  color: props.color.text,
                  fontSize: 20,
                  fontFamily: 'Dosis-Bold',
                }}
                value={updatedCg}
                onChangeText={(data) => setUpdatedCg(data)}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                updateData();

                navigation.navigate('Subjects', {
                  updatedData: data,
                });
              }}>
              <Image source={require('../../Assets/Group83.png')} />
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Dosis-Bold',
                  fontSize: 18,
                  top: -15,
                  color: props.color.text,
                }}>
                Use this
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Subjects', {
                  updatedData: data,
                });
              }}>
              <Image source={require('../../Assets/Group82.png')} />
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Dosis-Bold',
                  fontSize: 18,
                  top: -15,
                  color: props.color.text,
                }}>
                Discard this
              </Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const msp = (state) => ({
  color: state.color,
});

export default connect(msp, {})(SubjectDetails);

const styles = StyleSheet.create({});
