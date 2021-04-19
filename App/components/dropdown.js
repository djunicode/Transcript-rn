import * as React from 'react'
import {Text , StyleSheet , Dimensions, View} from 'react-native'
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Dropdown } from 'react-native-material-dropdown-v2';
import { Card, HelperText } from 'react-native-paper';
import {connect} from 'react-redux'
import { store_signup_temp } from '../redux/actions';

class DropDown extends React.PureComponent{
    
    state = {
        selected : '',
        height : 0,
        update : false
    }

    handle_selected = (value , index , data) =>{
        //console.log(value)
        if(this.state.selected !== value){
            this.setState({selected:value})
            this.props.store_signup_temp({"department" : value})
        }
    }
    
    render(){
        const {width , height} = Dimensions.get('window')
            return(
                <View style={{marginHorizontal : wp('8%')}}>
                        <View onLayout={event => {
                                const layout = event.nativeEvent.layout;
                                //console.log('height:', layout.height);
                                if(!this.state.update){this.setState({height : layout.height})}
                            }}>
                        <Dropdown
                            label={this.props.label}
                            data={this.props.options}
                            dropdownOffset = {{top:(this.state.height + 24) , left:0}}
                            onChangeText={this.handle_selected}
                            dropdownMargins={{min:width*0.05 , max:width*0.05}}
                            style={{backgroundColor : "#fff"}}
                        /> 
                        </View>
                </View>
            )
    }
}

const msp = state => ({
    color : state.color
})

export default connect(msp , {store_signup_temp})(DropDown)


const styles = StyleSheet.create({
    dropdown: {
        marginHorizontal:wp('2%'),
        marginVertical:hp('1.5%'), 
        backgroundColor:"#FFF",
        paddingHorizontal:wp('3%'),
        elevation:6,
        borderRadius:10,
    },
    card_title:{
        fontSize:hp('3%'),
        fontWeight:"900",
        marginTop:hp('2%'),
        marginHorizontal:wp('2%'),
        alignSelf:'auto'
    },
})
