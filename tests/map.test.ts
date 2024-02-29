import { parallelMap } from "@modules/map";

const numberListToTest = [1, 2, 3];

test('Should map a list of numbers to a list of string', async () => {
    const callback = (a: any) => String(a);

    const result = await parallelMap(numberListToTest, callback);

    const expectedResult = numberListToTest.map(callback);

    expect(result).toStrictEqual(expectedResult);
});

test('Should map a list of numbers adding 1', async () => {
    const callback = (n: number) => n + 1;

    const result = await parallelMap(numberListToTest, callback);

    const expectedResult = numberListToTest.map(callback);

    expect(result).toStrictEqual(expectedResult);
});

test('Should handle an empty array without errors', async () => {
    const callback = (n: number) => n * 2;

    const result = await parallelMap([], callback);

    expect(result).toStrictEqual([]);
});

test('Should correctly apply a function with multiple operations', async () => {
    const callback = (n: number) => `${n * 2}-${n + 1}`;

    const result = await parallelMap(numberListToTest, callback);

    const expectedResult = numberListToTest.map(callback);

    expect(result).toStrictEqual(expectedResult);
});

test('Should handle callbacks that return a promise', async () => {
    const callback = (n: number) => Promise.resolve(n + 2);

    const result = await parallelMap(numberListToTest, callback);

    const expectedResult = await Promise.all(numberListToTest.map(callback));

    expect(result).toStrictEqual(expectedResult);
});

test('Should throw or reject if any callback throws an error or rejects', async () => {
    const callback = (n: number) => {
        if (n === 2) throw new Error('Test error');
        return n * 2;
    };

    await expect(parallelMap(numberListToTest, callback)).rejects.toThrow(new Error('Test error'));
});

test('Should work with non-numeric arrays', async () => {
    const stringListToTest = ['a', 'b', 'c'];
    const callback = (str: string) => str.toUpperCase();

    const result = await parallelMap(stringListToTest, callback);

    const expectedResult = stringListToTest.map(callback);

    expect(result).toStrictEqual(expectedResult);
});
