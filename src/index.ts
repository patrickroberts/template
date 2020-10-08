/**
 * Example interface Foo
 */
export interface Foo {
  /**
   * Example property bar
   */
  bar: string;
}

/**
 * Example function main
 */
export default function* main(): Generator<Foo> {
  const value: Foo = { bar: 'Hello, world!' };
  yield value;
}
