import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {sub} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {data} from '../../Utils/detail';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// const Content = ({route}) => {
//   const {subjectName} = route.params;
//   return <Text>{subjectName}</Text>;
// };

const SubjectDetails = (props) => {
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
                      value={itemData.item.courseCode}
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
                      value={itemData.item.name}
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
                      value={itemData.item.creditsEarned}
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
                      value={itemData.item.grade}
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
                      value={itemData.item.pointer}
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
                      value={itemData.item.pointer}
                    />
                  </View>
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
            <TouchableOpacity>
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

            <TouchableOpacity>
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
