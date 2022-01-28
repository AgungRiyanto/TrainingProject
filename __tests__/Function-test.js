import {addNumbers, sayHello, stringNumber} from '../src/utils/helpers';

test('function test correctly', () => {
    expect(addNumbers(2, 3)).toEqual(5);
})

test('test say hello function', () => {
    expect(sayHello("Hello")).toEqual("Hello");
})

test('test string number', () => {
    expect(stringNumber("string", 3)).toEqual("string3")
})