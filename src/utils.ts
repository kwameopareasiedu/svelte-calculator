String.prototype.endsWithAnyOf = function (strs: string[]) {
  for (const str of strs) {
    if (this.endsWith(str)) return true;
  }

  return false;
};

export {};
