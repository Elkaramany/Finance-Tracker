import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import Text from './text';
import { scale, verticalScale } from '@/constants';

interface RadioButtonProps {
    title: string;
    selected: boolean;
    setSelected: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ title, selected, setSelected }) => {
    return (
        <TouchableOpacity
            onPress={setSelected}
            style={[styles.container, selected ? styles.selectedBorder : styles.defaultBorder]}>

            <Text value={title} color={selected ? 'blue' : '#000'} />

            <View style={[styles.outerCircle, selected ? styles.selectedOuterCircle : styles.defaultOuterCircle]}>
                <View style={styles.innerContainer}>
                    <View style={[styles.innerCircle, selected ? styles.selectedInnerCircle : styles.unselectedInnerCircle]} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default memo(RadioButton);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.8,
        borderRadius: scale(10),
        padding: scale(10),
        margin: verticalScale(10),
    },
    selectedBorder: {
        borderColor: 'blue',
    },
    defaultBorder: {
        borderColor: '#000',
    },
    outerCircle: {
        width: scale(25),
        height: scale(25),
        borderRadius: scale(25),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(10),
    },
    selectedOuterCircle: {
        backgroundColor: 'blue',
    },
    defaultOuterCircle: {
        backgroundColor: 'grey',
    },
    innerContainer: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(20),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: scale(12),
        height: scale(12),
        borderRadius: scale(12),
    },
    selectedInnerCircle: {
        backgroundColor: 'blue',
    },
    unselectedInnerCircle: {
        backgroundColor: 'grey',
    },
});
