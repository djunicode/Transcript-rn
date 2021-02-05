import React from 'react'
import { ImageBackground, StyleSheet, Text, View , Platform, TouchableOpacity, ScrollView, Keyboard, KeyboardAvoidingView, SafeAreaView} from "react-native";
import {colors} from '../res/colors';
import Text_input from '../components/textInput.js'
import { Switch , Card} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class Login extends React.Component{

    state = {
        username : "",
        password : "",
        student : true,
    }

    callback = (input, label) => {
        if (label === 'USERNAME') {
            this.setState({username: input})
        }else if(label === 'PASSWORD'){
            this.setState({password: input})
        }
    }
    
    onToggleSwitch = () => {
        this.setState({student: !this.state.student});
    }

    getbgcolor = () => {
        if(this.state.student){
            return {backgroundColor : colors.student.bgColor}
        }else{
            return {backgroundColor : colors.teacher.bgColor}
        }
    }

    getButtonColor = () => {
        if(this.state.student){
            return {backgroundColor : colors.student.color}
        }else{
            return {backgroundColor : colors.teacher.color}
        }
    }

    getTextColor = () => {
        if(!this.state.student){
            return {color : colors.student.textColor}
        }else{
            return {color : colors.teacher.textColor}
        }
    }

    render(){
        return(
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
            >
                <ImageBackground source={this.state.student ? require('../res/images/student.png') : require('../res/images/teacher.png')} style={styles.imagebgr}>
                    <Card style={[styles.card , this.getbgcolor() ]}>
                        <ScrollView>
                        {this.state.student?
                            (
                                <View>
                                    <Text style={[styles.textSmall , {color : 'black'}]}>Hello There Student</Text>
                                    <Text style={[styles.textBig , {color : 'black'}]}>Welcome Back!</Text>
                                </View>
                            ):
                            (
                                <View>
                                    <Text style={[styles.textSmall , {color:'white'}]}>Hello There Teacher</Text>
                                    <Text style={[styles.textBig , {color:'white'}]}>Welcome Back!</Text>
                                </View>
                            )
                        }
                    
                        <View style={styles.text_input_container}>
                            <Text_input label="USERNAME" callback={this.callback} teacher={!this.state.student}/>
                            <Text_input label="PASSWORD" callback={this.callback} teacher={!this.state.student}/>
                        </View>

                        <View style = {{marginTop:'10%'}}>
                            <TouchableOpacity onPress={() => console.log("Login Pressed")} style={[styles.buttonContainer , this.getButtonColor()]}>
                                        <Text style = {[styles.buttonText , this.getTextColor()]}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => console.log("Create Account Pressed")} style={[styles.buttonContainer , this.getButtonColor()]}>
                                        <Text style = {[styles.buttonText , this.getTextColor()]}>Create Account</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.switch}>
                            <View style={{alignSelf: 'flex-end', alignItems: 'center', padding: '5%'}}>
                                <Switch color={colors.teacher.color} value={!this.state.student} onValueChange={this.onToggleSwitch} />
                                {!this.state.student ? (
                                    <Text style={{color:'white'}}>I'm a teacher</Text>
                                ):(
                                    <Text style={{color:'black'}}>I'm a student</Text>
                                )}
                                </View>
                        </View>

                        </ScrollView>
                    </Card>
                </ImageBackground>

            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    imagebgr:{
        width: '100%', 
        height: '100%'
    },
    card : {
        flexGrow:0, 
        marginVertical:'2.5%', 
        marginHorizontal:'9%', 
        width:'82%', 
        height:'95%', 
        borderRadius:30, 
        overflow:'hidden'
    },
    textSmall: {
        fontSize: hp('3%'),
        fontFamily: 'dosis-regular',
        paddingTop : '11.8%',
        paddingHorizontal:'10%',
        fontWeight: '700'
    },
    textBig: {
        fontSize: hp('4.3%'),
        fontFamily: 'dosis-regular',
        paddingTop : '0%',
        paddingHorizontal:'10%',
        fontWeight: '700'
    },
    text_input_container:{
        paddingTop:'16.26%'
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        backgroundColor: colors.student.color,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
        marginBottom:'5%'
    },
    buttonText: {
        fontSize:hp('2.7%')
    },
    switch: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    }
})