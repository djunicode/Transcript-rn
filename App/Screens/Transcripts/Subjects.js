import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Title} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {data} from '../../Utils/temp';
import {upload_clicked} from '../../redux/actions';

import {BackHandler} from 'react-native';
import {upload_final_marksheet_call} from '../../API/api';

const Subjects = (props) => {
  // const {route} = props;
  const navigation = useNavigation();
  const response = props.route.params;
  const sem = props.route.params.sem;
  const updatedData = props.route.params.updatedData;

  const [data, setData] = useState();
  useEffect(() => {
    setData(response['response']['data'][`${sem}`]['subject']);
  }, []);

  useEffect(() => {
    const backAction = () => {
      props.upload_clicked(false);
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.color.background_init,
      }}>
      <ScrollView>
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
                Semester: {sem}
              </Text>
              <Text
                style={{
                  color: props.color.text,
                  fontSize: 20,
                  fontFamily: 'Dosis-Regular',
                }}>
                CGPA: {response['response']['data'][`${sem}`]['cgpa']}
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
                          subjectName: itemData.item.course_name,
                          cg: itemData.item.cg,
                          course_code: itemData.item.course_code,
                          credits_earned: itemData.item.credits_earned,
                          grade: itemData.item.grade,
                          pointer: itemData.item.pointer,
                          cgpa: response['response']['data'][`${sem}`]['cgpa'],
                          data: data,
                          sem: sem,
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
                          {itemData.item.course_name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={async () => {
                  try {
                    await upload_final_marksheet_call(
                      props.user.user_info['token'],
                      updatedData ? updatedData : data,
                      sem,
                    );
                    props.upload_clicked(false);
                    navigation.navigate('Transcripts');
                  } catch (e) {
                    alert(e);
                  }
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
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const msp = (state) => ({
  color: state.color,
  transcript: state.transcript,
  user: state.user,
});

export default connect(msp, {upload_clicked})(Subjects);

const styles = StyleSheet.create({});
