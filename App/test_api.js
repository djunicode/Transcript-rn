import React from 'react'
import {View} from 'react-native'
import {Button} from 'react-native-paper'
import {connect} from 'react-redux'

import {signup_api_call , login_api_call} from './API/api'

class Test extends React.Component{
    test_dabaao = async () => {
        try{
            const r = await login_api_call("amaygada@gmail.com" , "aaaa1234")
        }catch(e){
            alert(e)
        }
    }


    render(){
        return(
            <View>
                <Button onPress={this.test_dabaao}>Dabaao</Button>
            </View>
        )
    }
}

export default connect(null , {})(Test)