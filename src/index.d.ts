declare global {
  interface String {
    endsWithAnyOf: (strs: string[]) => boolean;
  }
}
