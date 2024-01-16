import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { SkillItem } from '../../components/SkillItem';

export function SkillsScreen() {

    const skillsData = [
        { id: '1', skillName: 'HTML', rating: 2.5 },
        { id: '2', skillName: 'CSS', rating: 3 },
        { id: '3', skillName: 'JavaScript', rating: 4.5 },
        { id: '4', skillName: 'Java', rating: 5 },
        { id: '5', skillName: 'Oracle', rating: 3.5 },
        { id: '6', skillName: 'SQLServer', rating: 1.5 },
        { id: '7', skillName: 'MongoDB', rating: 1 },
        { id: '8', skillName: 'PHP', rating: 3.5 },
        { id: '9', skillName: 'React', rating: 5 },
        { id: '10', skillName: 'React Native', rating: 2.5 },
        { id: '11', skillName: 'Angular', rating: 2 },
    ];


    return (
        <View style={styles.container}>
            <Header name="Minhas Habilidades" />

            <FlatList
                data={skillsData}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <SkillItem
                        key={item.id}
                        skillName={item.skillName}
                        rating={item.rating}
                    />
                }
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}