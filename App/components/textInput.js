import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import {connect} from 'react-redux'

class Text_input extends Component {
    state = {
        value: '',
    }

    // getTextStyle = () =>{
    //     let bgColor = colors.student.bgColor;
    //     let textColor = colors.student.textColor;
    //     let border = colors.student.color;
    //     if(this.props.teacher){
    //         bgColor = colors.teacher.bgColor;
    //         textColor = colors.teacher.textColor;
    //         border = colors.teacher.color;
    //     }
    //     return {
    //         backgroundColor: bgColor,
    //         color: textColor,
    //         borderColor: border
    //     }
    // }

    // getTextColor = () =>{
    //     let textColor = colors.student.textColor;
    //     if(this.props.teacher){
    //         textColor = colors.teacher.textColor;
    //     }
    //     return textColor
    // }

    render() {
        return (
            <View style={styles.textContainer}>
                <Text style={[styles.label, {backgroundColor : this.props.color.backgroundColor , color  : this.props.color.text , borderColor : this.props.color.text_input_underline}]}>
                    {this.props.label}
                </Text>
                <TextInput
                    style={[styles.inputStyle, {backgroundColor : this.props.color.backgroundColor , color  : this.props.color.text , borderColor : this.props.color.text_input_underline}]}
                    onChangeText={text => {
                            this.props.callback(text, this.props.label);
                            this.setState({value: text});
                        }
                    }
                    value={this.state.value}
                    underlineColor="transparent"
                    selectionColor = {this.props.color.text_input_underline}
                    underlineColorAndroid="transparent"
                    theme={{ colors: { text: this.props.color.text , underlineColor:'transparent' , primary: this.props.color.button} }}
                />
            </View>
        );
    }
}

const msp = state => ({
    color : state.color
})

export default connect(msp , {})(Text_input)

const styles = StyleSheet.create({
    container: {
        margin: 30,
        flex: 1,
        borderRadius: 30,
    },
    textContainer: {
        paddingHorizontal: '10%'
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 3,
    },
    label: {
        fontSize: 15,
        fontFamily: 'dosis-regular',
    },
    textLarge: {
        fontSize: 25,
        fontFamily: 'dosis-regular',
        fontWeight: 'bold',
    },
    inputStyle:{
        backgroundColor: 'white',
        borderBottomWidth: 7,
        borderRadius: 7,
        height: 30,
        marginBottom: 30,
    }
})
