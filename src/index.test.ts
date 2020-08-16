import main from './index';

describe('main', () => {
  it('does not throw', () => {
    expect(() => main()).not.toThrow();
  });

  it('returns a generator', () => {
    const iter = main();

    expect(iter).toHaveProperty([Symbol.iterator]);
    expect(iter).toHaveProperty('next');
    expect(iter).toHaveProperty('return');
    expect(iter).toHaveProperty('throw');
  });

  it('yields the correct results', () => {
    const iter = main();

    expect(iter.next()).toEqual({ done: false, value: { bar: 'Hello, world!' } });
    expect(iter.next()).toEqual({ done: true, value: undefined });
  });

  it('returns the correct value', () => {
    const value = {};
    const result = main().return(value);

    expect(result).toHaveProperty('done', true);
    expect(result).toHaveProperty('value', value);
  });

  it('throws the correct error', () => {
    const error = new Error();

    expect(() => main().throw(error)).toThrow(error);
  });
});
