import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import SemesterUploadMarksheet from '../../components/semesterUploadMarksheet';
import Header from '../../components/header';

class uploadMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        style={
          ([styles.container],
          {backgroundColor: this.props.color.background_init})
        }>
        <Header title="Upload Marksheet" />
        <View>
          <SemesterUploadMarksheet num={'I'} />
          <SemesterUploadMarksheet num={'II'} />
          <SemesterUploadMarksheet num={'III'} />
          <SemesterUploadMarksheet num={'IV'} />
          <SemesterUploadMarksheet num={'V'} />
          <SemesterUploadMarksheet num={'VI'} />
          <SemesterUploadMarksheet num={'VII'} />
          <SemesterUploadMarksheet num={'VIII'} />
        </View>
        <Button
          style={[styles.button, {backgroundColor: this.props.color.button}]}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Save Changes
        </Button>
      </ScrollView>
    );
  }
}

const msp = (state) => ({
  color: state.color,
});

export default connect(msp, {})(uploadMarksheet);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: wp('50%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
