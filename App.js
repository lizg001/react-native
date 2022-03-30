import React, { useEffect } from 'react';
import {
	SafeAreaView,
	ScrollView,
	useColorScheme,
	View,
	Alert,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import WebIM from './src/utils/WebIM';
import LoginView from './src/components/login';
import MessageView from './src/components/message';
import LogoutView from './src/components/logout';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	useEffect(() => {
		WebIM.conn.addEventHandler('Chat', {
			onConnected: () => {
				Alert.alert('Login Success');
			},
			onTextMessage: message => {
				Alert.alert('收到来自' + message.from + '的一条消息，内容是:' + message.msg);
			},
			onClosed: () => {
				Alert.alert('Logout Success');
			},
			onError: err => {
				Alert.alert(err);
			}
		});
	}, []);

	return (
		<SafeAreaView style={backgroundStyle}>
			<ScrollView>
				<View
					style={{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}>
					<LoginView />
					<MessageView />
					<LogoutView />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
