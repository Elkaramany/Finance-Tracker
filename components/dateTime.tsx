import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { scale } from '@/constants';
import Text from './text'

interface CustomDatePickerProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

const CustomDatePicker = ({ selectedDate, onDateChange }: CustomDatePickerProps) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (event: any, selectedDate: Date | undefined) => {
        if (event.type === 'set' && selectedDate) {
            onDateChange(selectedDate);
        }
        setShowPicker(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.textContainer}>
                <Text value={selectedDate ? selectedDate.toLocaleString() : 'Select date and time'} />
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="datetime"
                    onChange={handleChange}
                    style={styles.datePicker}
                    maximumDate={new Date()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: scale(8),
        marginVertical: 8,
    },
    textContainer: {
        padding: 12,
    },
    selectedText: {
        fontSize: 16,
        color: '#333',
    },
    datePicker: {
        width: '100%',
    },
});

export default CustomDatePicker;
