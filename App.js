/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';


export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
            correctDetails: false
        };
    }

    handleClick = () => {
        let _message = '';
        let _correct = false;

        if (this.state.email === '' && this.state.password === '') {
            _message = 'No input';
        }
        else if (this.state.email === '') {
            _message = 'Email required'
        }
        else if (this.state.password === '') {
            _message = 'Password required'
        }
        else if (this.state.email === 'nishant@gmail.com') {
            if (this.state.password === 'secret') {
                _message = 'Hello Nishant';
                _correct = true;
            } else {
                _message = 'Wrong Password'
            }
        } else {
            _message = 'Wrong email address'
        }

        this.setState({
            message: _message,
            correctDetails: _correct
        }, () => {
            if (this.state.correctDetails)
                Alert.alert('Email: ' + this.state.email + ' Password: ' + this.state.password);
        });

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25, color: 'green'}}>Login</Text>
                <View style={styles.field}>
                    <TextInput style={styles.input}
                               placeholderTextColor={'grey'}
                               placeholder={'Enter email'}
                               keyboardType={'email-address'}
                               onChangeText={(changed) => {
                                   this.setState({email: changed})
                               }}
                    />
                </View>
                <View style={styles.field}>
                    <TextInput style={styles.input}
                               placeholderTextColor={'grey'}
                               placeholder={'Enter password'}
                               secureTextEntry={true}
                               onChangeText={(changed) => {
                                   this.setState({password: changed})
                               }}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={this.handleClick}>
                    <Text style={{color:'white',textAlign:'center'}} selectable={false}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text>{this.state.message}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25
    },
    input: {
        flex: 1
    },
    button: {
        width:150,
        padding:10,
        borderRadius:50,
        backgroundColor: '#4286f4',
    }
});
