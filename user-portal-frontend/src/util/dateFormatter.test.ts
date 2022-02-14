import { formatDOB } from './dateFormatter';
test('Date Formatter Test', () => {
    // Given a date
    const inputDate = new Date('1965-08-03 4:00:00');

    // When the date formatter is run
    const output = formatDOB(inputDate);

    // Then a string in the proper date format is returned.
    expect(output).toEqual('8/3/1965');
});