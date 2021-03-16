import { lint } from '../../src';

describe('no-empty-list', () => {
  test('success', () => {
    const md = '1.success';
    expect(lint(md)).toEqual([]);
  });

  test('fail', () => {
    const md = '1. hello\n' +
               '2.';
    expect(lint(md)).toEqual([{
      level: 'error',
      start: {
        line: 2,
        column: 1,
      },
      end: {
        line: 2,
        column: 3,
      },
      text: '',
      type: 'no-empty-list'
    }]);
  });
});
