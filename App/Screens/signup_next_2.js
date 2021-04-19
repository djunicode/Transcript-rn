import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View , Platform, TouchableOpacity, ScrollView, Keyboard, KeyboardAvoidingView, SafeAreaView} from "react-native";
import { ActivityIndicator, TextInput } from 'react-native-paper';
import Text_input from '../components/textInput';
import { Switch , Card} from 'react-native-paper';
import {connect} from 'react-redux'
import {store_signup_temp , clear_user_data , signup_redux_call , clear_sign_deets} from '../redux/actions.js';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Dropdown from './../components/dropdown'
import Year from './../components/year'
import store from './../redux/store'

class Signup extends React.Component {
    state = {
      dept: '',
      adm_year: '',
      student: true,
    };
  
    changeTheme = () => {
      let toggle = this.props.color.gradient==="light"
      if(toggle) this.props.change_color_theme_to_dark({})
      else this.props.change_color_theme_to_light({})
    }
  
    callback = (input, label) => {
        if (label === 'NAME') {
            this.setState({name: input});
        }else if (label === 'SAP ID') {
            this.setState({sap: input});
        }else if(label === 'CONTACT'){
            this.setState({contact: input})
        }
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.sign.data) {
        nextProps.clear_sign_deets({})
        nextProps.navigation.navigate('Login');
      }
      return null;
    }
  
    onToggleSwitch = () => {
      this.setState({student: !this.state.student});
    };

    signup = async () => {

      const ref = {
        'Computers' : 'CS',
        'Information Technology' : 'IT',
        'Electronics and Telecommunication' : 'EXTC' ,
        'Electronics' : 'ELEX',
        'MECHANICAL' : 'MECH',
        'Chemical' : 'CHEM',
        'Biomedical' : 'BIOMED',
        'Production' : 'PROD',
        'Others' : 'OTHERS'

      }

      const o = store.getState().user
      let new_o = {}
      let prof = {}
      new_o["email"] = o["email"]
      new_o["password"] = o["password"]
      new_o["re_password"] = o["re_password"]
      prof["name"] = o["name"]
      prof["sap_id"] = o["sap_id"]
      prof["contact_no"] = o["contact_no"]
      prof["department"] = ref[o["department"]]
      prof["admission_year"] = o["admission_year"]
      new_o["profile"] = prof
      new_o["is_management"] = false

      console.log(new_o)
      await this.props.signup_redux_call(new_o)
      this.props.clear_user_data({})
    }
  
    render() {
      //console.log(this.props.sign)
        let data = [{
            value: 'Computers',
          }, {
            value: 'Information Technology',
          }, {
            value: 'Electronics and Telecommunication',
          },{
            value: 'Electronics',
          },{
            value: 'Mechanical',
          },{
            value: 'Chemical',
          },{
            value: 'Biomedical',
          },{
            value: 'Production',
          },{
            value: 'Others',
          }];
      let toggle = this.props.color.gradient === "dark"
      return (
        <KeyboardAvoidingView style={{flex:1}}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
          enabled={Platform.OS === 'ios' ? true : false}>
          <ImageBackground
            source={
              this.props.color.text === '#000'
                ? require('../res/images/light.png')
                : require('../res/images/dark.png')
            }
            style={styles.imagebgr}>
            <Card
              style={[
                styles.card,
                {backgroundColor: this.props.color.background_init},
              ]}>
              
                {this.state.student ? (
                  <View>
                    <Text
                      style={[styles.textSmall, {color: this.props.color.text}]}>
                      You are
                    </Text>

                    <Text
                      style={[styles.textBig, {color: this.props.color.text}]}>
                      almost there!
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={[styles.textSmall, {color: 'white'}]}>
                      Hello There Teacher
                    </Text>
                    <Text style={[styles.textBig, {color: 'white'}]}>
                      Welcome Back!
                    </Text>
                  </View>
                )}
  
                <View style={styles.text_input_container}>
                    <Dropdown label="Department" options={data}/>
                    <View style = {{marginTop : hp('4%')}}>
                        <Year/>
                    </View>
                </View>

                {this.props.sign.stat?(<ActivityIndicator style={{marginTop:hp('4%')}} color={this.props.color.button}/>) : (<View></View>)}
  
                <View style={{marginTop: '10%'}}>
                  <TouchableOpacity
                    onPress={this.signup}
                    style={[
                      styles.buttonContainer,
                      {backgroundColor: this.props.color.button},
                    ]}>
                    <Text
                      style={[styles.buttonText, {color: this.props.color.text}]}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
              
            </Card>
          </ImageBackground>
        </KeyboardAvoidingView>
      );
    }
  }

const msp = state => ({
    color : state.color,
    sign : state.sign
})
export default connect(msp , {clear_user_data , store_signup_temp , signup_redux_call , clear_sign_deets})(Signup)

const styles = StyleSheet.create({
    imagebgr: {
      width: '100%',
      height: '100%',
    },
    card: {
      flexGrow: 0,
      marginVertical: '2.5%',
      marginHorizontal: '9%',
      width: '82%',
      height: '95%',
      borderRadius: 30,
      overflow: 'hidden',
    },
    textVerySmall: {
        fontSize: hp('2.2%'),
        fontFamily: 'dosis-regular',
        paddingTop: '11.8%',
        paddingHorizontal: '10%',
        fontWeight: '500',
    },
    textSmall: {
      fontSize: hp('3%'),
      fontFamily: 'dosis-regular',
      paddingTop: '11.8%',
      paddingHorizontal: '10%',
      fontWeight: '700',
    },
    textBig: {
      fontSize: hp('3.5%'),
      fontFamily: 'dosis-regular',
      paddingTop: '0%',
      paddingHorizontal: '10%',
      fontWeight: '700',
    },
    text_input_container: {
      paddingTop: '16.26%',
    },
    buttonContainer: {
      width: '50%',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      height: 40,
      marginBottom: '5%',
    },
    buttonText: {
      fontSize: hp('2.7%'),
    },
    switch : {
      marginRight : hp("10%"),
      alignSelf : "flex-end",
      justifyContent : 'flex-end',
      alignContent : "flex-end",
  }
  });
