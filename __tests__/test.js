import React from 'react';
import { Text, View } from 'react-native';
import { render, screen } from '@testing-library/react-native';

describe('Text Component', () => {
  it('renders hello world', () => {
    render(
      <View>
        <Text testID="hello">Hello World</Text>
      </View>
    );
    
    const helloText = screen.getByTestId('hello');
    expect(helloText).toBeTruthy();
  });
});