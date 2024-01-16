import React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { WHATSAPP_URL } from '../../constants/whatsapp_contact';

export function ButtonWhatsapp() {

    const handleOpenWhatsApp = () => {
        Linking.openURL(WHATSAPP_URL);
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleOpenWhatsApp}>
            <Icon name="whatsapp" size={30} color="#25D366" style={styles.icon} />
            <Text style={styles.text}>Entre em contato</Text>
        </TouchableOpacity>
    );
}