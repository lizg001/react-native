import React from 'react';
import { SafeAreaView, View, Button,Alert } from 'react-native';
import WebIM from '../../utils/WebIM';
const LoginView = () => {
	const loginIM = () => {
		WebIM.conn.open({ user: "lizg2", pwd: "1" })
    .then((res) => {
      console.log('onLogin success',res)
    }).catch((err) => {
      Alert.alert(err);
    })
	}
	return (
    <SafeAreaView>
      <View>
        <Button title="Login" onPress={() => loginIM()} />
      </View>
    </SafeAreaView>
  );
};

export default LoginView;
