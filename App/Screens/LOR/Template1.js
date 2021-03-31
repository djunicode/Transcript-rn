import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

const Template1 = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Card
        style={{
          margin: 10,
          borderRadius: 25,
          backgroundColor: props.color.background_inner,
        }}>
        <Card.Content>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              LOR Sample 1
            </Text>
            <Entypo
              name="cross"
              size={30}
              color={props.color.text}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={{marginTop: heightPercentageToDP('2%')}}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet hendrerit ligula. Sed mollis dui mattis, sollicitudin
              elit vitae, vulputate urna. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Maecenas facilisis mi a justo molestie
              hendrerit. Curabitur finibus nulla tellus, viverra tincidunt
              turpis pharetra in. Nullam tincidunt id erat quis auctor. Duis
              pulvinar dui quis mi fringilla, ornare condimentum nisl facilisis.
              Fusce porttitor viverra massa in consectetur. Sed et porta nulla,
              condimentum cursus mi. Nunc tellus quam, aliquam sed lectus ut,
              consectetur vestibulum urna. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Aenean
              tristique enim vel sollicitudin lobortis. Curabitur et ante in
              arcu lacinia gravida.Proin vehicula libero nec eleifend semper.
              Phasellus faucibus fringilla feugiat.
            </Text>
          </View>
          <View style={{marginTop: heightPercentageToDP('2%')}}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Yours sincerely
            </Text>
          </View>
          <View style={{marginTop: heightPercentageToDP('4%')}}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Full name of the recommender:
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Designation-Departmen:t
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              College, City:
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              Contact No:
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Dosis-Bold',
                color: props.color.text,
              }}>
              E-mail ID:
            </Text>
          </View>
          <View style={{marginLeft: widthPercentageToDP('80%')}}>
            <MaterialIcons name="done" size={30} color={props.color.text} />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const msp = (state) => ({
  color: state.color,
});
export default connect(msp, {})(Template1);

const styles = StyleSheet.create({});
