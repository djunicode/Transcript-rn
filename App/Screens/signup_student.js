import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View , Platform, TouchableOpacity, ScrollView, Keyboard, KeyboardAvoidingView, SafeAreaView} from "react-native";
import { TextInput } from 'react-native-paper';
import {colors} from '../res/colors';
import Text_input from '../components/textInput';
import { Switch } from 'react-native-paper';

export default class signup_student extends Component {
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

    

    getContainerStyle = () =>{
        let bgColor = colors.student.bgColor;
        let textColor = colors.student.textColor;
        if(this.state.isSwitchOn){
            bgColor = colors.teacher.bgColor;
            textColor = colors.teacher.textColor;
        }
        return {
            backgroundColor: bgColor,
            color: textColor,
        }
    }
    getCreateAccountStyle = () => {
        let tcolor = colors.student.bgColor;
        if(this.state.isSwitchOn){
            tcolor = colors.teacher.bgColor;
        }
        return {
            color: tcolor,
        }
    }
    getButtonStyle = () => {
        let bgColor = colors.student.color;
        if(this.state.isSwitchOn){
            bgColor = colors.teacher.color;
        }
        return {
            backgroundColor: bgColor,
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
            >        
                <ImageBackground source={this.state.isSwitchOn ? require('../res/images/teacher.png') : require('../res/images/student.png')} style={{width: '100%', height: '100%'}}>        
                    <SafeAreaView style={[ styles.container,this.getContainerStyle()]}>
                            <View style={styles.textContainer}>
                                <Text style={[styles.textSmall, this.getContainerStyle()]}>
                                    Having a tough time {'\n'}
                                    managing your documents?
                                </Text>
                                <Text style={[styles.textLarge, this.getContainerStyle()]}>
                                    You're at the
                                </Text>
                                <Text style={[{textDecorationLine: 'underline'}, styles.textLarge, this.getContainerStyle()]}>
                                    right place
                                </Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text_input label="USERNAME" callback={this.callback} teacher={this.state.isSwitchOn} />
                                <Text_input label="PASSWORD" callback={this.callback} teacher={this.state.isSwitchOn}/>
                                <Text_input label="CONFIRM PASSWORD" callback={this.callback} teacher={this.state.isSwitchOn}/>
                            </View>
                            <View style={{flex: 3, paddingTop: '30%'}}>
                                <TouchableOpacity onPress={() => console.log("Pressed")} style={[styles.buttonContainer, this.getButtonStyle()]}>
                                    <Text style = {[styles.textSmall, this.getCreateAccountStyle()]}>Create my account</Text>
                                </TouchableOpacity>
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
                            </View>
                        
                    </SafeAreaView>     
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.student.bgColor,
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
        backgroundColor: colors.student.color,
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
        color: colors.student.textColor,
    },
    inputStyle:{
        backgroundColor: colors.student.bgColor
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