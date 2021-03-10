import { Calculator } from "./calculator";

test('Addition of 1 and 1 is 2', ()=>{
    const calculator = new Calculator();
    let value:number = calculator.add(1, 1);
    let expected_value:number = 2;
    expect(value).toBe(expected_value);
});

test('Addition of 5 and 6 is 11', () => {
    const calculator = new Calculator();
    let value: number = calculator.add(5, 6);
    let expected_value: number = 11;
    expect(value).toBe(expected_value);
});

test('Addition of 2Bill and 2Bill is 4Bill', () => {
    const calculator = new Calculator();
    let value: number = calculator.add(2*Math.pow(10, 9), 2*Math.pow(10, 9));
    let expected_value: number = 4*Math.pow(10, 9);
    expect(value).toBe(expected_value);
});

test('difference of 7 and 2 is 5',  ()=>{
    const calculator = new Calculator();
    let value: number = calculator.difference(7, 2);
    let expected_value: number = 5;
    expect(value).toBe(expected_value);
});

test('difference of -2Bill and 2Bill is -4Bill',  ()=>{
    const calculator = new Calculator();
    let value: number = calculator.difference(-2*Math.pow(10, 9), 2*Math.pow(10, 9));
    let expected_value: number = -4*Math.pow(10, 9);
    expect(value).toBe(expected_value);
});

test('multiplication of 7 and 2 is 5',  ()=>{
    const calculator = new Calculator();
    let value: number = calculator.multiplication(7, 2);
    let expected_value: number = 14;
    expect(value).toBe(expected_value);
});

test('multiplication of 2Bill and 2Bill is 4*10^18',  ()=>{
    const calculator = new Calculator();
    let value: number = calculator.multiplication(2*Math.pow(10, 9), 2*Math.pow(10, 9));
    let expected_value: number = 4*Math.pow(10, 18);
    expect(value).toBe(expected_value);
});

test('division of 24 and 6 is 4',  ()=>{
    const calculator = new Calculator();
    let value = calculator.division(24, 6);
    let expected_value: number = 4;
    expect(value).toBe(expected_value);
});

test('division of 1 and 0 is error',  ()=>{
    const calculator = new Calculator();
    let value = calculator.division(1, 0);
    let expected_value = Infinity;
    expect(value).toBe(expected_value);
});
