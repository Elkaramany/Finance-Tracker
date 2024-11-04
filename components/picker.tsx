import React, { memo, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { scale, verticalScale } from '@/constants';
import Text from './text'

interface CustomPickerProps<T> {
    selectedValue: T;
    onValueChange: (value: T) => void;
    items: { label: string; value: T }[];
    placeholder?: string;
}

const CustomPicker = <T extends string | number>({
    selectedValue,
    onValueChange,
    items,
    placeholder = 'Select an option',
}: CustomPickerProps<T>) => {
    const [isPickerVisible, setIsPickerVisible] = useState(false);

    return (
        <View style={styles.container}>
            {isPickerVisible ? (
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => {
                        onValueChange(itemValue);
                        setIsPickerVisible(false);
                    }}
                    style={styles.picker}
                >
                    {items.map((item) => (
                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                    ))}
                </Picker>
            ) : (
                <TouchableOpacity onPress={() => setIsPickerVisible(true)} style={styles.textContainer}>
                    <Text value={selectedValue ? items.find((item) => item.value === selectedValue)?.label : placeholder} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: verticalScale(8),
    },
    textContainer: {
        padding: scale(12),
    },
    picker: {
        height: verticalScale(50),
        width: '100%',
    },
});

export default memo(CustomPicker);