import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Error extends React.Component{

    get_description = (x) => {
        switch(x){
            case "Error 404":
                return ("The page you’re trying to look for, doesn’t exist or is temporarily under maintainence.")
            case "Error 401":
                return("Sorry! You don’t have access to this page, probably due to a failed log in attempt.")
            case "Error 400":
                return("The server cannot or will not process the request due to something that is perceived to be a client error.")
            case "Error 403":
                return("Excuse me, you’re lurking around in restricted sections of our servers.")
        }
    }

    get_small_description = (x) => {
        switch(x){
            case "Error 404":
                return ("Not Found.")
            case "Error 401":
                return("Unauthorized")
            case "Error 400":
                return("Bad Request")
            case "Error 403":
                return("Forbidden")
        }
    }

    render(){
        const error_code = this.props.error_code
        return(
            <View style={[styles.container , {backgroundColor : this.props.color.background_init}]}>
                <View style={[styles.header_style , {backgroundColor : this.props.color.button}]}>
                    <Text style={[styles.err_code,{color : this.props.color.text}]}>{error_code}</Text>
                    <Text style={[styles.small_err_desc , {color : this.props.color.text}]}>{this.get_small_description(error_code)}</Text>
                    <Text style={[styles.err_desc , {color:this.props.color.text}]}>{this.get_description(error_code)}</Text>
                </View>
            </View>
        )
    }
}

const msp = state => ({
    color : state.color
})

export default connect(msp , {})(Error)

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    header_style : {
        height : hp('50%'),
        borderBottomLeftRadius  :100,
        borderBottomRightRadius : 100,
        alignContent : 'flex-start',
        alignItems : 'flex-start',
        justifyContent : 'flex-start'
    },
    err_code : {
        fontWeight : "700",
        alignSelf : 'center',
        marginTop : hp("5.5%"),
        fontSize : 30
    },
    err_desc : {
        fontWeight : "200",
        alignSelf : 'center',
        justifyContent : 'center',
        marginTop : hp("5.5%"),
        marginHorizontal : wp("12.5%"),
        textAlign:'center',
        fontSize : 20
    },
    small_err_desc : {
        fontWeight : "100",
        alignSelf : 'center',
        justifyContent : 'center',
        marginTop : hp("5.5%"),
        marginHorizontal : wp("12.5%"),
        textAlign:'center',
        fontSize : 15
    }
})