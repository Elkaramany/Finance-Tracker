import { globalStyles, HEIGHT } from '@/constants';
import React, { useRef, useEffect } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    Animated,
    PanResponder,
    TouchableOpacity,
} from 'react-native';
import RadioButton from './radioButton';
import Text from './text';
import Button from './button';

interface BottomSheetProps {
    visible: boolean;
    onClose: () => void;
    selectedFilter: 'all' | 'expense' | 'income';
    selectedSortOrder: 'asc' | 'desc';
    onFilterChange: (filter: 'all' | 'expense' | 'income') => void;
    onSortChange: (sort: 'asc' | 'desc') => void;
    customHeightMultiplier?: number;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
    visible,
    onClose,
    selectedFilter,
    selectedSortOrder,
    onFilterChange,
    onSortChange,
    customHeightMultiplier
}) => {
    const translateY = useRef(new Animated.Value(HEIGHT)).current;
    const bottomSheetHeight = customHeightMultiplier ? HEIGHT * customHeightMultiplier : HEIGHT * 0.85;
    const backgroundHeight = HEIGHT - bottomSheetHeight;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    translateY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > HEIGHT * 0.25) {
                    closeBottomSheet();
                } else {
                    openBottomSheet();
                }
            },
        })
    ).current;

    useEffect(() => {
        if (visible) {
            openBottomSheet();
        } else {
            closeBottomSheet();
        }
    }, [visible]);

    const openBottomSheet = () => {
        Animated.spring(translateY, {
            toValue: 1,
            useNativeDriver: true,
            speed: 8,
            bounciness: 5,
        }).start();
    };

    const closeBottomSheet = () => {
        Animated.timing(translateY, {
            toValue: HEIGHT,
            duration: 200,
            useNativeDriver: true,
        }).start(() => onClose());
    };

    return (
        <Modal
            transparent
            animationType="none"
            visible={visible}
            onRequestClose={closeBottomSheet}
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={{ height: backgroundHeight }} onPress={closeBottomSheet} />
                <Animated.View
                    style={[
                        styles.bottomSheet,
                        {
                            transform: [{ translateY }],
                            height: bottomSheetHeight,
                        },
                    ]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.radioGroup}>
                        <Text value="Filter By:" />
                        <RadioButton
                            title="All"
                            selected={selectedFilter === 'all'}
                            setSelected={() => onFilterChange('all')}
                        />
                        <RadioButton
                            title="Expenses"
                            selected={selectedFilter === 'expense'}
                            setSelected={() => onFilterChange('expense')}
                        />
                        <RadioButton
                            title="Income"
                            selected={selectedFilter === 'income'}
                            setSelected={() => onFilterChange('income')}
                        />
                    </View>

                    <View style={styles.radioGroup}>
                        <Text value="Sort By:" />
                        <RadioButton
                            title="Ascending"
                            selected={selectedSortOrder === 'asc'}
                            setSelected={() => onSortChange('asc')}
                        />
                        <RadioButton
                            title="Descending"
                            selected={selectedSortOrder === 'desc'}
                            setSelected={() => onSortChange('desc')}
                        />
                    </View>

                    <Button
                        value='Done' onPress={closeBottomSheet} buttonStyle={globalStyles.bottomAbsoluted}
                    />
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
    },
    radioGroup: {
        marginVertical: 10,
    },
});

export default BottomSheet;
