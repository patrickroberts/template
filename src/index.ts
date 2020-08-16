export interface Foo {
  bar: string;
}

export default function* main(): Generator<Foo> {
  const value: Foo = { bar: 'Hello, world!' };
  yield value;
}
