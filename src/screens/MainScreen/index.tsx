import React from 'react';
import { Alert, Image, Linking, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { GITHUB_URL_PERFIL, LINKEDIN_PERFIL_URL } from '../../constants/urls_app';
import { Platform } from 'react-native';
import { Header } from '../../components/Header';
import { ButtonWhatsapp } from '../../components/ButtonWhatsapp';
import { ButtonBriefing } from '../../components/ButtonBriefing';

export function MainScreen() {

    function handleOpenLinkedinButton() {
        Linking.openURL(LINKEDIN_PERFIL_URL);
    }

    function handleOpenGithubButton() {
        Linking.openURL(GITHUB_URL_PERFIL);
    }

    function handleOpenEmailButton() {
        let email = "carlosjunior1983@gmail.com";
        Clipboard.setStringAsync(email);
        Platform.OS === 'android' ? ToastAndroid.show('E-mail: ' + email + ' copiado', ToastAndroid.LONG) : Alert.alert("E-mail copiado", email);
    }

    return (
        <View style={styles.container}>
            <Header name="Carlos Cazelatto Jr" info="Software Engineer" />
            <View style={styles.buttonContainer}>
                <ButtonBriefing
                    title='Linkedin'
                    icon='linkedin'
                    nameFunction={handleOpenLinkedinButton}
                />
                <ButtonBriefing
                    title='Github'
                    icon='github'
                    nameFunction={handleOpenGithubButton}
                />
                <ButtonBriefing
                    title='E-mail'
                    icon='envelope'
                    nameFunction={handleOpenEmailButton}
                />
                <ButtonWhatsapp />
            </View>
        </View>
    );
}