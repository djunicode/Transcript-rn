import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';

import {
  signup_api_call,
  login_api_call,
  reset_password_api_call,
  get_transcripts_api_call,
} from './API/api';

class Test extends React.Component {
  test_dabaao = async () => {
    try {
      const r = await get_transcripts_api_call(
        this.props.user.user_info['token'],
      );
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <View>
        <Button onPress={this.test_dabaao}>Dabaao</Button>
      </View>
    );
  }
}
const msp = (state) => ({
  user: state.user,
});

export default connect(msp, {})(Test);
