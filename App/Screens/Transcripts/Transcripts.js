import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from './../../components/header';

const Grid = (props) => {
  return(
    <Image source={require('./../../Assets/transcript_grid_item.png')} style={{width:wp('40%'), height:hp('20%')}}/>
  )
}

class T_Item extends React.Component{

  render(){

    switch(this.props.len){

      case 1:
        return(
          <View style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: hp('3%'),
            }}>
            <Grid/>
            <View style={{width:wp('40%'), height:hp('20%')}}></View>
          </View>
        )

      case 2:
        return(
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: hp('3%'),
          }}>
            <Grid/>
            <Grid/>
          </View>
        )

      case 3:
        return(
          <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: hp('3%'),
          }}>
            <Grid/>
            <Grid/>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: hp('3%'),
          }}>
            <Grid/>
            <View style={{width:wp('40%'), height:hp('20%')}}></View>
            </View>
          </View>
        )

        case 4:
          return(
            <View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: hp('3%'),
            }}>
              <Grid/>
              <Grid/>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: hp('3%'),
            }}>
              <Grid/>
              <Grid/>
            </View>
            </View>
          )
      
      default:
        return(<View></View>)
    }

  }

}

class Transcripts extends React.Component{

  state = {
    data : [{}, {}, {}, {}]
  }

  add_transcript = () => {
    console.log('hi')
  }

  render(){
    return (
      <View style={{flex: 1, backgroundColor: this.props.color.background_init}}>
        <Header title="Dashboard" />
        <View
          style={{
            marginLeft: 20,
            marginTop: hp('2%'),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: wp('8%'), color: this.props.color.text}}>
            Transcripts
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Upload Marksheet');
            }}
            style={{
              backgroundColor: this.props.color.button,
              borderRadius: 5,
              marginRight: wp('12%'),
              padding: 3,
            }}>
            <Text style={{color: this.props.color.text, fontSize: wp('4%')}}>
              Upload Marksheets
            </Text>
          </TouchableOpacity>
        </View>
        
        

        <T_Item len={this.state.data.length} data={this.state.data}/>



        <View style={{bottom:0, position:'absolute', marginBottom:hp('4%')}}>
          <TouchableOpacity onPress={this.add_transcript}>
            <AntDesign
              name="pluscircle"
              size={wp('12%')}
              color={this.props.color.button}
              style={{marginHorizontal: wp('44%')}}
            />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontSize: wp('8%'),
              color: this.props.color.text,
              marginTop: hp('2%')
            }}>
            Add New Transcript
          </Text>
        </View>
      </View>
    );
  }

}

const msp = (state) => ({
  color: state.color,
});

export default connect(msp, {})(Transcripts);

const styles = StyleSheet.create({});
