import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, TouchableOpacity, TextStyle, I18nManager } from 'react-native';
import { colors, scale, textScale, verticalScale } from '@/constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from './text';

interface Props extends TextInputProps {
    label?: string;
    parentContainerStyle?: ViewStyle
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    placeholder?: string;
    hint?: string;
    buttonStyle?: ViewStyle;
    onRightIconPress?: () => void;
    onLeftIconPress?: () => void;
    labelStyle?: TextStyle | ViewStyle | any;
    inputStyle?: TextStyle | ViewStyle | any;
    inputRef?: any
    toggleFocused?: () => void
    toggleBlurred?: () => void
}

const Input: React.FC<Props> = ({
    label, parentContainerStyle, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing, rightIcon, leftIcon, hint, buttonStyle, onRightIconPress, onLeftIconPress, labelStyle = {}, inputStyle, inputRef, toggleFocused, toggleBlurred, ...rest
}) => {

    return (
        <GestureHandlerRootView style={[styles.inputContainer, parentContainerStyle]}>
            {label && <Text value={label} body style={{ marginBottom: 10, marginLeft: 2 }} />}
            <View style={[styles.touchableContainer, buttonStyle]}>
                {leftIcon && (
                    <TouchableOpacity
                        onPress={onLeftIconPress}
                        style={styles.iconContainer}
                    >
                        {leftIcon}
                    </TouchableOpacity>
                )}
                <TextInput
                    ref={inputRef}
                    style={[styles.input, inputStyle, { width: rightIcon ? '72%' : '100%' }]}
                    numberOfLines={1}
                    placeholder={placeholder}
                    placeholderTextColor={colors.text.disabled}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={toggleFocused}
                    onBlur={toggleBlurred}
                    textContentType='oneTimeCode'
                    blurOnSubmit={true}
                    {...rest}
                />
                {rightIcon && (
                    <TouchableOpacity
                        onPress={() => {
                            if (onRightIconPress) {
                                onRightIconPress();
                            }
                        }}
                        style={styles.iconContainer}
                    >
                        {rightIcon}
                    </TouchableOpacity>
                )}
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginVertical: verticalScale(10),
        justifyContent: 'space-between',
    },
    touchableContainer: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: scale(5),
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(12),
        borderColor: '#ccc',
        marginVertical: 8,
    },
    input: {
        color: colors.text.primary,
    },
    iconContainer: {
        padding: scale(10),
    }
});

export default Input;
