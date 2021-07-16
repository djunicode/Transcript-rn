import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DocumentPicker from 'react-native-document-picker';

class SemesterUploadMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedText: 'No file chosen',
      file: '',
    };
  }

  selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('File Name : ' + res.name);
      this.setState({file: res, uploadedText: res.name});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error');
        throw err;
      }
    }
  };

  render() {
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
    );
  }
}

const msp = (state) => ({
  color: state.color,
});

export default connect(msp, {})(SemesterUploadMarksheet);

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
