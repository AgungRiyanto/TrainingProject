import { Animated } from 'react-native';

jest.useFakeTimers();

Animated.timing = () => ({
    start: () => jest.fn(),
});