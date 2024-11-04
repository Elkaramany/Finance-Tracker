import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native'
import Text from './text'
import { colors, globalStyles, scale, verticalScale } from '@/constants'

interface Props {
    onPress: () => void
    value: string
    buttonStyle?: ViewStyle
    textStyle?: TextStyle
    icon?: React.ReactNode
    testID?: string
}

const Button: React.FC<Props> = ({ onPress, value, buttonStyle, textStyle, icon, testID }) => {
    return (
        <TouchableOpacity onPress={onPress} testID={testID}
            style={[styles.container, buttonStyle]}>
            {icon && <View style={{ paddingRight: scale(5) }}>{icon}</View>}
            <Text value={value} style={[styles.buttonText, textStyle]} title />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.rowCenter,
        backgroundColor: colors.brand.primary,
        padding: scale(12),
        borderRadius: scale(42),
        margin: verticalScale(5),
        width: '100%'
    }, buttonText: {
        color: colors.text.primary,
    }
})

export default Button;