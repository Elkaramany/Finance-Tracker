import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner: React.FC<{ big?: boolean, spinnerColor?: string }> = ({ big, spinnerColor }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ActivityIndicator
                size={big == true ? 'large' : 'large'}
                color={spinnerColor || 'blue'}
            />
        </View>
    );
}

export default Spinner;