import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../components/header';
import { globalStyles } from '../constants';

describe('Header Component', () => {
    const mockTitle = 'Test Header';
    const mockOnIconPress = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders with correct title', () => {
        const { getByTestId } = render(
            <Header title={mockTitle} onIconPress={mockOnIconPress} />
        );
        const headerText = getByTestId('header-text');
        expect(headerText.props.children).toBe(mockTitle);
    });


    it('calls onIconPress when add button is pressed', () => {
        const { getByTestId } = render(
            <Header title={mockTitle} onIconPress={mockOnIconPress} />
        );
        const addButton = getByTestId('header-add-button');
        fireEvent.press(addButton);
        expect(mockOnIconPress).toHaveBeenCalledTimes(1);
    });

    it('passes correct props to Text component', () => {
        const { getByTestId } = render(
            <Header title={mockTitle} onIconPress={mockOnIconPress} />
        );
        const headerText = getByTestId('header-text');
        expect(headerText.props.children).toBe(mockTitle);
    });

    it('renders with global rowBetween style', () => {
        const { getByTestId } = render(
            <Header title={mockTitle} onIconPress={mockOnIconPress} />
        );
        const container = getByTestId('header-container');
        expect(container.props.style).toEqual(expect.objectContaining(globalStyles.rowBetween));
    });
});
