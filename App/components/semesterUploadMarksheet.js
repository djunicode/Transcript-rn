import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

class SemesterUploadMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedText: 'No file chosen',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Semester {this.props.num}</Text>
        <View
          style={[
            styles.uploadContainer,
            {borderColor: this.props.color.background_inner},
          ]}>
          <Text style={styles.uploadedText}>{this.state.uploadedText}</Text>
          <Button
            contentStyle={{height: hp('4%')}}
            style={[
              styles.button,
              {backgroundColor: this.props.color.background_inner},
            ]}
            mode="contained"
            onPress={() => console.log('Pressed')}>
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
    height: hp('10%'),
  },
  text: {
    backgroundColor: 'yellow',

    flex: 1,
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
  },
  uploadContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
  },
  uploadedText: {
    fontSize: 13,
    alignSelf: 'flex-end',
  },
});
