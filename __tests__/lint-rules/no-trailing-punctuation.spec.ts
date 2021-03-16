import { lint } from '../../src';

describe('no-trailing-punctuation', () => {
  test('success', () => {
    const md = `## header 2`;
    expect(lint(md)).toEqual([]);
  });

  test('fail', () => {
    const md = `### header 3**!**`;
    expect(lint(md)).toEqual([{
      level: 'error',
      start: {
        line: 1,
        column: 15,
      },
      end: {
        line: 1,
        column: 16,
      },
      text: `'!'`,
      type: 'no-trailing-punctuation'
    }]);
  });
});
