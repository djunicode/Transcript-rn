import React from 'react'
import {View , Text , StyleSheet , Image} from 'react-native'
import {connect} from 'react-redux'
import {Button , Switch} from 'react-native-paper'
import Header from './../components/header.js'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { change_color_theme_to_dark, change_color_theme_to_light , clear_user_data , change_log_status} from './../redux/actions.js';

class Settings extends React.Component{

    changeTheme = () => {
        let toggle = this.props.color.gradient==="light"
        if(toggle) this.props.change_color_theme_to_dark({})
        else this.props.change_color_theme_to_light({})
    }

    logout = () => {
        this.props.clear_user_data({})
        this.props.change_log_status(false)
        this.props.navigation.navigate("Login")
    }

    render(){
        let toggle = this.props.color.gradient === "dark"
        //console.log(toggle)
        let image = require('./../res/images/settings_man.png')
        return(
            <View style={{flex:1 , backgroundColor : this.props.color.background_init}}>
                <Header title="Settings"/>
                <Image source={image} style={styles.image_style}/>
                <Text style={[styles.user_text, {color : this.props.color.text}]}>PropUserName</Text>
                <Button mode="contained" style={[styles.button , {backgroundColor : this.props.color.button}]} labelStyle={{color : this.props.color.text}}> Update Details </Button>
                <Button mode="contained" style={[styles.button , {backgroundColor : this.props.color.button}]} labelStyle={{color : this.props.color.text}} onPress={this.logout}> Logout </Button>
                <View style={{flexDirection : 'row' , marginTop : hp("3%")}}>
                    <View style={{flex:1}}>
                        <Text style={[styles.theme_text , {color : this.props.color.text}]}>App Theme</Text>
                    </View>
                    <Switch color={this.props.color.button} style={[styles.switch]} value={toggle} onValueChange={this.changeTheme}/>
                </View>
            </View>
        )
    }
}

const msp = state => ({
    color : state.color
})

export default connect(msp , {change_color_theme_to_dark , change_color_theme_to_light , clear_user_data , change_log_status})(Settings)

const styles = StyleSheet.create({
    image_style : {
        width:hp("20%"),
        height:hp("20%"),
        alignSelf : 'center',
        marginTop : hp("2.5%"),
        marginBottom : hp("2.5%")
    },
    user_text : {
        alignSelf : 'center',
        fontSize  : hp("3%"),
        fontWeight : "600",
        marginBottom : hp("2.5%")
    },
    button : {
        marginHorizontal : wp("20%"),
        marginTop : hp("2%")      
    },
    theme_text : {
        marginLeft : wp("21%"),
        alignSelf : 'flex-start',
        fontSize : hp("2.5%"),
        fontWeight : "100",
        fontFamily: 'Roboto-Thin',
    },
    switch : {
        marginRight : hp("10%"),
        alignSelf : "flex-end",
        justifyContent : 'flex-end',
        alignContent : "flex-end",
    }
})