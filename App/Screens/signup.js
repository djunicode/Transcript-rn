import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View , Platform, TouchableOpacity, ScrollView, Keyboard, KeyboardAvoidingView, SafeAreaView} from "react-native";
import { TextInput } from 'react-native-paper';
import Text_input from '../components/textInput';
import { Switch } from 'react-native-paper';
import {connect} from 'react-redux'
import { change_color_theme_to_dark, change_color_theme_to_light } from '../redux/actions.js';

class Signup extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        isSwitchOn: false,
    }

    onToggleSwitch = () => {
        this.setState({isSwitchOn: !this.state.isSwitchOn});
    }

    callback = (input, label) => {
        if (label === 'USERNAME') {
            this.setState({username: input})
        }else if(label === 'PASSWORD'){
            this.setState({password: input})
        }else if(label === 'CONFIRM PASSWORD'){
            this.setState({confirmPassword: input})
        }
    }

    

    // getContainerStyle = () =>{
    //     let bgColor = colors.student.bgColor;
    //     let textColor = colors.student.textColor;
    //     if(this.state.isSwitchOn){
    //         bgColor = colors.teacher.bgColor;
    //         textColor = colors.teacher.textColor;
    //     }
    //     return {
    //         backgroundColor: bgColor,
    //         color: textColor,
    //     }
    // }
    // getCreateAccountStyle = () => {
    //     let tcolor = colors.student.bgColor;
    //     if(this.state.isSwitchOn){
    //         tcolor = colors.teacher.bgColor;
    //     }
    //     return {
    //         color: tcolor,
    //     }
    // }
    // getButtonStyle = () => {
    //     let bgColor = colors.student.color;
    //     if(this.state.isSwitchOn){
    //         bgColor = colors.teacher.color;
    //     }
    //     return {
    //         backgroundColor: bgColor,
    //     }
    // }

    render() {
        //console.log(this.props.color.text)
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
            >        
                <ImageBackground source={this.props.color.text==="#000" ? require('../res/images/light.png') : require('../res/images/dark.png')} style={{width: '100%', height: '100%'}}>        
                    <SafeAreaView style={[ styles.container, {backgroundColor  : this.props.color.background_init , color:this.props.color.text}]}>
                            <View style={styles.textContainer}>
                                <Text style={[styles.textSmall, {backgroundColor  : this.props.color.background_init , color:this.props.color.text}]}>
                                    Having a tough time {'\n'}
                                    managing your documents?
                                </Text>
                                <Text style={[styles.textLarge, {backgroundColor  : this.props.color.background_init , color:this.props.color.text}]}>
                                    You're at the
                                </Text>
                                <Text style={[{textDecorationLine: 'underline'}, styles.textLarge, {backgroundColor  : this.props.color.background_init , color:this.props.color.text}]}>
                                    right place
                                </Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text_input label="USERNAME" callback={this.callback} teacher={this.state.isSwitchOn} />
                                <Text_input label="PASSWORD" callback={this.callback} teacher={this.state.isSwitchOn}/>
                                <Text_input label="CONFIRM PASSWORD" callback={this.callback} teacher={this.state.isSwitchOn}/>
                            </View>
                            <View style={{flex: 3, paddingTop: '30%'}}>
                                <TouchableOpacity onPress={()=>{this.props.change_color_theme_to_light({})}} style={[styles.buttonContainer, {backgroundColor : this.props.color.button}]}>
                                    <Text style = {[styles.textSmall, {color : this.props.color.text}]}>Create my account</Text>
                                </TouchableOpacity>
                                
                            </View>
                        
                    </SafeAreaView>     
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const msp = state => ({
    color : state.color
})
export default connect(msp , {change_color_theme_to_dark , change_color_theme_to_light})(Signup)

const styles = StyleSheet.create({
    container: {
        margin: 30,
        flex: 1,
        borderRadius: 30,
    },
    textContainer: {
        flex: 3,
        justifyContent: 'flex-end',
        paddingLeft: '10%',
        paddingBottom: '15%'
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40
    },
    textSmall: {
        fontSize: 15,
        fontFamily: 'dosis-regular',
        color: 'white',
    },
    textLarge: {
        fontSize: 25,
        fontFamily: 'dosis-regular',
        fontWeight: 'bold',
    },
    accountButton:{
        width: '10%'
    },
    switch: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    }
})

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