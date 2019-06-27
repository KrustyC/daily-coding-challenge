import scheduler from './day-10';

jest.useFakeTimers();

describe('day-10', () => {
  test('scheduler', () => {
    const fakeFunction = jest.fn();
    scheduler(fakeFunction, 1000);

    expect(fakeFunction).not.toBeCalled();

    jest.runAllTimers();

    expect(fakeFunction).toBeCalled();
    expect(fakeFunction).toHaveBeenCalledTimes(1);
  });
});
