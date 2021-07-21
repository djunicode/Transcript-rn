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
          <SemesterUploadMarksheet num={'I'} sem={1} nav= {this.props.navigation}/>
          <SemesterUploadMarksheet num={'II'} sem={2} nav= {this.props.navigation}/>
          <SemesterUploadMarksheet num={'III'} sem={3}nav= {this.props.navigation}/>
          <SemesterUploadMarksheet num={'IV'} sem={4} nav= {this.props.navigation}/>
          <SemesterUploadMarksheet num={'V'} sem={5} nav= {this.props.navigation}/>
          <SemesterUploadMarksheet num={'VI'} sem={6} nav= {this.props.navigation}/>
          <SemesterUploadMarksheet num={'VII'} sem={7} nav= {this.props.navigation}/>
          <SemesterUploadMarksheet num={'VIII'} sem={8} nav= {this.props.navigation}/>
        </View>
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
