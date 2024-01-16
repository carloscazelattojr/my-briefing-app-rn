import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { PHOTO_PERFIL } from '../../constants/urls_app';

interface Props {
    name: string;
    info?: string;
}

export function Header({ name, info }: Props) {

    return (
        <View style={styles.container}>
            <Image source={{ uri: PHOTO_PERFIL }} style={styles.image} />
            <Text style={[styles.title, styles.subtitle]}>{name}</Text>
            <Text style={styles.subtitle}>{info}</Text>
        </View>
    );
}