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
import {Switch, Card , ActivityIndicator} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {
  change_color_theme_to_dark,
  change_color_theme_to_light,
  login_redux_call
} from '../redux/actions.js';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    student: true,
  };

  changeTheme = () => {
    let toggle = this.props.color.gradient==="light"
    if(toggle) this.props.change_color_theme_to_dark({})
    else this.props.change_color_theme_to_light({})
  }

  callback = (input, label) => {
    if (label === 'EMAIL') {
      this.setState({email: input});
    } else if (label === 'PASSWORD') {
      this.setState({password: input});

    }
  };

  login = async () => {
    await this.props.login_redux_call(this.state.email , this.state.password);
  }

  onToggleSwitch = () => {
    this.setState({student: !this.state.student});
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.user_info) {
      nextProps.navigation.navigate('Home');
    }
    return null;
  }

  render() {
    let toggle = this.props.color.gradient === "dark"
    return (
      <KeyboardAvoidingView style={{flex:1}}
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
                  label="EMAIL"
                  callback={this.callback}
                  teacher={!this.state.student}
                />
                <Text_input
                  label="PASSWORD"
                  callback={this.callback}
                  teacher={!this.state.student}
                />
              </View>
              {this.props.log? (<ActivityIndicator/>) : (<View></View>)}
              <View style={{marginTop: '10%'}}>
                <TouchableOpacity
                  onPress={this.login}
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
                  onPress={() => {this.props.navigation.navigate('SignUp')}}
                  style={[
                    styles.buttonContainer,
                    {backgroundColor: this.props.color.button},
                  ]}>
                  <Text
                    style={[styles.buttonText, {color: this.props.color.text}]}>
                    Create Account
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {this.props.navigation.navigate('Forgot')}}>
                  <Text
                    style={{color: this.props.color.text , alignSelf : 'center' , textDecorationLine: 'underline', marginTop : hp("2%") , fontSize:hp("2%")}}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            
          </Card>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const msp = state => ({
    color : state.color,
    log : state.log,
    user : state.user
})

export default connect(msp,{login_redux_call})(Login)


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
  switch : {
    marginRight : hp("10%"),
    alignSelf : "flex-end",
    justifyContent : 'flex-end',
    alignContent : "flex-end",
}
});
