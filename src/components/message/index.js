import React from 'react';
import { SafeAreaView, View, Button, Alert } from 'react-native';
import WebIM from '../../utils/WebIM';
const MessageView = () => {
    const sendText = () => {
        let option = {
            chatType: 'singleChat', // 会话类型，设置为单聊。
            type: 'txt', // 消息类型。
            to: 'lizg3', // 消息接收方（用户 ID)。
            msg: 'react native test message', // 消息内容。
        };
        let msg = WebIM.message.create(option);
        WebIM.conn.send(msg).then(res => {
            let sucMsg = JSON.stringify(res);
            Alert.alert('send private text success', sucMsg);
        }).catch((err) => {
            let errMsg = JSON.stringify(err);
            Alert.alert('send private text fail', errMsg);
        });
    }
    return (
        <SafeAreaView>
            <View>
                <Button title="SendTextMsg" onPress={() => sendText()} />
            </View>
        </SafeAreaView>
    );
};

export default MessageView;
