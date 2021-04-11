import { useLinkProps } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text , TouchableOpacity} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import {connect} from 'react-redux'
import {store_signup_temp} from './../redux/actions'

const App = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      props.store_signup_temp({"admission_year" : newDate.toString().substring(11,15)})
      showPicker(false);
      setDate(newDate);
    },
    [date, showPicker],
  );

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => showPicker(true)}>
        <Text style={{color:props.color.text , textDecorationLine:'underline' , alignSelf:'center' , fontSize:heightPercentageToDP('2%')}}>Select Year of Admission</Text>
      </TouchableOpacity>
      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          minimumDate={new Date(2005 , 5)}
        />
      )}
    </SafeAreaView>
  );
};

const msp = state => ({
    color : state.color
})

export default connect(msp , {store_signup_temp})(App)