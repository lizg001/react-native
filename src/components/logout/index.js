import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import WebIM from '../../utils/WebIM';
const LogoutView = () => {
    const logoutIM = () => {
        WebIM.conn.close();
    };
    return (
        <SafeAreaView>
            <View>
                <Button title="Logout" onPress={() => logoutIM()} />
            </View>
        </SafeAreaView>
    );
};

export default LogoutView;
