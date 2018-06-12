import React from 'react';
import { View , StyleSheet, Image } from 'react-native';

const UserPhoto = (props) => (
    <View style={styles.userphoto}>
        <Image
            style={styles.shadow}
            source={require('../assets/images/user-shadow.png')}
        />
        <Image
            style={styles.image}
            source={require('../assets/images/user.png')}
        />
    </View>
);

const styles = StyleSheet.create({
    userphoto: {
        marginBottom: 30
    },
    image: {
        width: 125,
        height: 125
    },
    shadow: {
        width: 125,
        height: 125,
        position: 'absolute',
        top: 20
    }
});

export default UserPhoto;