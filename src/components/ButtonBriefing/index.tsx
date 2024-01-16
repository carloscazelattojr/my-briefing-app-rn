import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

interface Props {
    title: string;
    icon: string;
    nameFunction: () => void;
}

export function ButtonBriefing({ title, icon, nameFunction }: Props) {
    return (
        <TouchableOpacity style={[styles.button,]} onPress={nameFunction}>
            <Icon name={icon} size={30} color={'white'} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}