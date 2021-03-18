import React from 'react'
import {Appbar} from 'react-native-paper'
import {connect} from 'react-redux'

class Header extends React.Component{
    render(){
        if(this.props.back_button){
            return(
                <Appbar.Header style = {{backgroundColor : this.props.color.button}}>
                    <Appbar.BackAction onPress={this.props.nav_back} />
                    <Appbar.Content title={this.props.title}/>
                </Appbar.Header>
            )
        }else{
            return(
                <Appbar.Header style = {{backgroundColor : this.props.color.button}}>
                    <Appbar.Content title={this.props.title} titleStyle={{textAlign:'center'}}/>
                </Appbar.Header>
            )
        }
    }
}


const msp = state => ({
    color : state.color
})

export default connect(msp,{})(Header)

const colors = {
    header_background:"#1e4f74",
}