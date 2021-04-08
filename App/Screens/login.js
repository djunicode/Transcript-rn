import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import Text_input from '../components/textInput.js';
import {Switch, Card} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {
  change_color_theme_to_dark,
  change_color_theme_to_light,
} from '../redux/actions.js';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    student: true,
  };

  callback = (input, label) => {
    if (label === 'USERNAME') {
      this.setState({username: input});
    } else if (label === 'PASSWORD') {
      this.setState({password: input});

    }
  };

  onToggleSwitch = () => {
    this.setState({student: !this.state.student});
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}>
        <ImageBackground
          source={
            this.props.color.text === '#000'
              ? require('../res/images/light.png')
              : require('../res/images/dark.png')
          }
          style={styles.imagebgr}>
          <Card
            style={[
              styles.card,
              {backgroundColor: this.props.color.background_init},
            ]}>
            <ScrollView>
              {this.state.student ? (
                <View>
                  <Text
                    style={[styles.textSmall, {color: this.props.color.text}]}>
                    Hello There Student
                  </Text>
                  <Text
                    style={[styles.textBig, {color: this.props.color.text}]}>
                    Welcome Back!
                  </Text>
                </View>
              ) : (
                <View>
                  <Text style={[styles.textSmall, {color: 'white'}]}>
                    Hello There Teacher
                  </Text>
                  <Text style={[styles.textBig, {color: 'white'}]}>
                    Welcome Back!
                  </Text>
                </View>
              )}

              <View style={styles.text_input_container}>
                <Text_input
                  label="USERNAME"
                  callback={this.callback}
                  teacher={!this.state.student}
                />
                <Text_input
                  label="PASSWORD"
                  callback={this.callback}
                  teacher={!this.state.student}
                />
              </View>

              <View style={{marginTop: '10%'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Home');
                  }}
                  style={[
                    styles.buttonContainer,
                    {backgroundColor: this.props.color.button},
                  ]}>
                  <Text
                    style={[styles.buttonText, {color: this.props.color.text}]}>
                    Login
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {}}
                  style={[
                    styles.buttonContainer,
                    {backgroundColor: this.props.color.button},
                  ]}>
                  <Text
                    style={[styles.buttonText, {color: this.props.color.text}]}>
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Card>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const msp = state => ({
    color : state.color
})

export default connect(msp,{})(Login)


const styles = StyleSheet.create({
  imagebgr: {
    width: '100%',
    height: '100%',
  },
  card: {
    flexGrow: 0,
    marginVertical: '2.5%',
    marginHorizontal: '9%',
    width: '82%',
    height: '95%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  textSmall: {
    fontSize: hp('3%'),
    fontFamily: 'dosis-regular',
    paddingTop: '11.8%',
    paddingHorizontal: '10%',
    fontWeight: '700',
  },
  textBig: {
    fontSize: hp('4.3%'),
    fontFamily: 'dosis-regular',
    paddingTop: '0%',
    paddingHorizontal: '10%',
    fontWeight: '700',
  },
  text_input_container: {
    paddingTop: '16.26%',
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    marginBottom: '5%',
  },
  buttonText: {
    fontSize: hp('2.7%'),
  },
  switch: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
});

/*

<View style={styles.switch}>
                            <View style={{alignSelf: 'flex-end', alignItems: 'center', padding: '5%'}}>
                                <Switch color={colors.teacher.color} value={!this.state.student} onValueChange={this.onToggleSwitch} />
                                {!this.state.student ? (
                                    <Text style={{color:'white'}}>I'm a teacher</Text>
                                ):(
                                    <Text style={{color:'black'}}>I'm a student</Text>
                                )}
                                </View>
                        </View>

*/
