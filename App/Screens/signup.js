import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View , Platform, TouchableOpacity, ScrollView, Keyboard, KeyboardAvoidingView, SafeAreaView} from "react-native";
import { TextInput } from 'react-native-paper';
import Text_input from '../components/textInput';
import { Switch , Card} from 'react-native-paper';
import {connect} from 'react-redux'
import { change_color_theme_to_dark, change_color_theme_to_light , store_signup_temp} from '../redux/actions.js';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

class Signup extends React.Component {
    state = {
      email: '',
      password: '',
      confirm:'',
      student: true,
    };
  
    changeTheme = () => {
      let toggle = this.props.color.gradient==="light"
      if(toggle) this.props.change_color_theme_to_dark({})
      else this.props.change_color_theme_to_light({})
    }
  
    callback = (input, label) => {
        if (label === 'EMAIL') {
            this.setState({email: input});
        }else if (label === 'PASSWORD') {
            this.setState({password: input});
        }else if(label === 'CONFIRM PASSWORD'){
            this.setState({confirm: input})
        }
    };
  
    onToggleSwitch = () => {
      this.setState({student: !this.state.student});
    };

    next = () => {
      this.props.store_signup_temp({'email' : this.state.email , 'password' : this.state.password , 're_password' : this.state.confirm})
      this.props.navigation.navigate('SN1')
    }
  
    render() {
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
                      style={[styles.textVerySmall, {color: this.props.color.text}]}>
                      Having a tough time {'\n'}
                      Managing your documents?
                    </Text>

                    <Text
                      style={[styles.textSmall, {color: this.props.color.text}]}>
                      You are at the
                    </Text>

                    <Text
                      style={[styles.textBig, {color: this.props.color.text}]}>
                      Right place
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
                  <Text_input
                    label="EMAIL"
                    callback={this.callback}
                    teacher={!this.state.student}
                  />
                  <Text_input
                    label="PASSWORD"
                    callback={this.callback}
                    teacher={!this.state.student}
                  />
                  <Text_input
                    label="CONFIRM PASSWORD"
                    callback={this.callback}
                    teacher={!this.state.student}
                  />
                </View>
  
                <View style={{marginTop: '10%'}}>
                  <TouchableOpacity
                    onPress={this.next}
                    style={[
                      styles.buttonContainer,
                      {backgroundColor: this.props.color.button},
                    ]}>
                    <Text
                      style={[styles.buttonText, {color: this.props.color.text}]}>
                      Next
                    </Text>
                  </TouchableOpacity>
  
                  <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Text
                      style={{color: this.props.color.text , alignSelf : 'center' , textDecorationLine: 'underline', marginTop : hp("2%") , fontSize:hp("2%")}}>
                      Already have an account?
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
    color : state.color
})
export default connect(msp , {change_color_theme_to_dark , change_color_theme_to_light , store_signup_temp})(Signup)

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
        paddingTop: '7%',
        paddingHorizontal: '10%',
        fontWeight: '500',
    },
    textSmall: {
      fontSize: hp('3%'),
      fontFamily: 'dosis-regular',
      paddingTop: '1%',
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

/* 

<View style={styles.switch}>
                                    <View style={{alignSelf: 'flex-end', alignItems: 'center', padding: '5%'}}>
                                        <Switch color={colors.student.color} value={this.state.isSwitchOn} onValueChange={this.onToggleSwitch} />
                                        {this.state.isSwitchOn ? (
                                            <Text style={this.getContainerStyle()}>I'm a teacher</Text>
                                        ):(
                                            <Text style={this.getContainerStyle()}>I'm a student</Text>
                                        )}
                                    </View>
                                </View>

*/