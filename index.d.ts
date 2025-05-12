declare module 'node-singleflight' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function Do<T>(key: any, fn: () => Promise<T>): Promise<T>;
}
