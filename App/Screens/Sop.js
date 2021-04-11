import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'
import Header from './../components/header.js'
import {Button} from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

class SOP extends React.Component{

  state={
    visible:true
  }

  render(){
    return(
      <View style={{flex : 1 , backgroundColor : this.props.color.background_init}}>

        <Header title="SOP"/>
        
        <View style={[styles.text_view]}>
          <Text style={[styles.text , {color : this.props.color.text}]}>SOP Plagiarism helps us find similarity between your SOP and the content available on the internet.</Text>
          <Text style={[styles.text , {color : this.props.color.text}]}>A score above 10% indicates major changes are required.
A score between 5-10% need revision and minor changes in content.
A score less than 5% is acceptable but can be improved</Text>
        </View>

        <View style={[styles.upload]}>
          <Text style={[styles.upload_text , {color : this.props.color.text}]}>Enter a PNG or JPEG of your SOP</Text>
          <Button mode="contained" style={[{backgroundColor : this.props.color.button , marginLeft:wp("10%")}]} labelStyle={{color : this.props.color.text , alignSelf : 'center'}} onPress={()=>{}}> Upload </Button>
        </View>

        <View style={[styles.check_button_view]}>
          <Button mode="contained" style={[{backgroundColor : this.props.color.button}]} labelStyle={{color : this.props.color.text , alignSelf : 'center' , alignItems:'center' , justifyContent : 'center'}} onPress={()=>{}}>Run the plagiarism Checker</Button>
        </View>

        {this.state.visible ? (
          <View style={[styles.result_view]}>
            <Text style={[styles.result_text , {color : this.props.color.text}]}>Similarity Score</Text>
            <Text style={[styles.result_val , {color : this.props.color.button}]}> 89% </Text>
          </View>
        ) : (<View></View>)}

      </View>
    )
  }
}

const msp = state => ({
  color : state.color
})

export default connect(msp , {})(SOP);

const styles = StyleSheet.create({
  text_view : {
    marginHorizontal : hp("3%"),
    marginTop : hp("3%"),
    marginBottom : hp("6%"),
  },
  text:{
    fontSize : hp("2.3%"),
    marginBottom : hp("1%")
  },
  upload : {
    marginHorizontal : hp("3%"),
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginBottom : hp("2%")
  },
  upload_text : {
    width : wp("37%"),
    fontWeight : 'bold',
    fontSize : hp("2.4%")
  },
  upload_button : {
    marginRight : wp("1%"),
    alignSelf : "flex-end",
    justifyContent : 'flex-end',
    alignContent : "flex-end",
  },
  check_button_view : {
    marginTop : hp("5%"),
    justifyContent : 'center',
    alignItems : 'center'
  },
  check_button : {
    alignSelf:'center'
  },
  result_view : {
    marginTop : hp("5%"),
    justifyContent : 'center',
    alignItems : 'center',
    alignContent : 'center',
    alignSelf : 'center'
  },
  result_text : {
    fontWeight : 'bold',
    fontSize : hp("2.5%")
  },
  result_val : {
    fontSize : hp("6%"),
    fontWeight : 'bold'
  }
});
