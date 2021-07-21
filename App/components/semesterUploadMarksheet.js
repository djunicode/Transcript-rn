import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DocumentPicker from 'react-native-document-picker';
import { scan_marksheet } from '../API/api';
import { editable_ocr_create, scan_marksheet_async_action, upload_clicked } from './../redux/actions'

class SemesterUploadMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedText: 'No file chosen',
      file: '',
    };
  }

  scan_api_call = async (file) => {
    await this.props.scan_marksheet_async_action(this.props.user.user_info["token"], file, this.props.sem)
  }

  selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      this.setState({file: res, uploadedText: res.name});
      await this.scan_api_call(res)
      this.props.nav.navigate('Subjects');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert(err);
        //throw err;
        //console.log(err.stack())
      }
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.transcript.clicked) {
      console.log("hi")
    }
    return null;
  }

  render() {
    if(this.props.transcript.clicked)
      this.props.upload_clicked(false)
    //console.log(this.props.transcript)
    //console.log(this.props.user.user_info)
    if(this.props.transcript.clicked){
      return(
        <View style={styles.container}>
          <Text style={{color:"#fff"}}>Loading...</Text>
        </View>
      )
    }
    else{
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {color: this.props.color.text}]}>
          Semester {this.props.num}
        </Text>
        <View
          style={[
            styles.uploadContainer,
            {
              borderColor: this.props.color.text,
            },
          ]}>
          <Text
            numberOfLines={2}
            style={[styles.uploadedText, {color: this.props.color.text}]}>
            {this.state.uploadedText}
          </Text>
          <Button
            contentStyle={{height: hp('5%')}}
            style={[styles.button, {backgroundColor: this.props.color.button}]}
            mode="contained"
            onPress={() => this.selectFile()}>
            Upload
          </Button>
        </View>
      </View>
    )};
  }
}

const msp = (state) => ({
  color: state.color,
  user : state.user,
  transcript : state.transcript
});

export default connect(msp, {editable_ocr_create, scan_marksheet_async_action, upload_clicked})(SemesterUploadMarksheet);

const styles = StyleSheet.create({
  container: {
    marginTop: hp('1%'),
    marginHorizontal: wp('10%'),
    height: hp('9%'),
  },
  text: {
    flex: 0.7,
    fontWeight: 'bold',
    fontSize: 17,
  },
  button: {
    position: 'absolute',
    right: 0,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 3,
  },
  uploadContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
  },
  uploadedText: {
    fontSize: 13,
    alignSelf: 'flex-end',
    width: wp('50%'),
  },
});
