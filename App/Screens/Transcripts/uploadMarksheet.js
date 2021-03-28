import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import SemesterUploadMarksheet from '../../components/semesterUploadMarksheet';

class uploadMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: this.props.color.background_inner,
            height: hp('13%'),
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: hp('6%'),
              fontSize: 32,
              fontFamily: 'dosis-regular',
              color: this.props.color.text,
            }}>
            Upload Marksheet
          </Text>
        </View>
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
          style={[
            styles.button,
            {backgroundColor: this.props.color.background_inner},
          ]}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Save Changes
        </Button>
      </View>
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
    backgroundColor: 'white',
  },
  button: {
    width: wp('50%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
