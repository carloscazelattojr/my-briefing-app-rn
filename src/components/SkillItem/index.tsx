import React from 'react';
import { Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';

import { styles } from './styles';

interface SkillProps {
    skillName: string;
    rating: number;
}

export function SkillItem({ skillName, rating }: SkillProps) {
    return (
        <View style={styles.skillContainer}>
            <Text style={styles.skillName}>{skillName}</Text>
            <Rating
                type="star"
                ratingCount={5}
                imageSize={20}
                startingValue={rating}
                readonly={true}
                style={styles.rating}
            />
        </View>
    );
}