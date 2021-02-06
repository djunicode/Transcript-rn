import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import {colors} from '../res/colors';

export default class Text_input extends Component {
    state = {
        value: '',
    }
    getTextStyle = () =>{
        let bgColor = colors.student.bgColor;
        let textColor = colors.student.textColor;
        let border = colors.student.color;
        if(this.props.teacher){
            bgColor = colors.teacher.bgColor;
            textColor = colors.teacher.textColor;
            border = colors.teacher.color;
        }
        return {
            backgroundColor: bgColor,
            color: textColor,
            borderColor: border
        }
    }

    getTextColor = () =>{
        let textColor = colors.student.textColor;
        if(this.props.teacher){
            textColor = colors.teacher.textColor;
        }
        return textColor
    }

    render() {
        return (
            <View style={styles.textContainer}>
                <Text style={[styles.label, this.getTextStyle()]}>
                    {this.props.label}
                </Text>
                <TextInput
                    style={[styles.inputStyle, this.getTextStyle()]}
                    onChangeText={text => {
                            this.props.callback(text, this.props.label);
                            this.setState({value: text});
                        }
                    }
                    value={this.state.value}
                    underlineColor="transparent"
                    selectionColor = {this.props.teacher ? colors.teacher.color : colors.student.color}
                    underlineColorAndroid="transparent"
                    theme={{ colors: { text: this.getTextColor() } }}
                />
            </View>
        );
    }
}

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
        borderColor: colors.student.color,
        borderRadius: 7,
        height: 30,
        marginBottom: 30,
    }
})
